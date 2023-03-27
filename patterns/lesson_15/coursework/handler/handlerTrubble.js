import answerHandler from '../handler/handlerAnswer.js'
import Reserve from '../helper/reserve.js'
import { СaseBuilder } from '../paterns/builder.js'
import getRandomInt from '../helper/randomInt.js'
import handlerTime from '../handler/handlerTime.js'

let handlerTrubble = function (timeTourist, trubbleBuilder, backpack, step, val) {
    var caseBuilder = new СaseBuilder();
    let trubble = caseBuilder.construct(trubbleBuilder)
    let handlerBackpack = trubble.existenceInBackpack(backpack)
    let time;
    if (handlerBackpack) {
        time = getRandomInt(5, 10)
        backpack = new Reserve(backpack).take();
        console.log(step.positiveEnd + time + ' хвилин')
        timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)
    } else {
        time = getRandomInt(25, 30)
        timeTourist = answerHandler(timeTourist, step, time, val, )
    } 

    return timeTourist  
}

export default handlerTrubble