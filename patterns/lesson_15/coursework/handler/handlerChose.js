import readlineSync from 'readline-sync';
import choseBackpack from '../helper/choseBackpack.js'
import handlerTime from '../handler/handlerTime.js'
import resultStep from '../result/resultStep.js'
import getRandomInt from '../helper/randomInt.js'

let fnBackpack = function (step, backpack, timeTourist) {
    let handlerChoseBackpack = choseBackpack(step, backpack);
    let time = handlerChoseBackpack.time;
    backpack = handlerChoseBackpack.backpack;

    timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)
    resultStep(timeTourist)
    return {timeTourist, backpack}
}
let fnMeet = function (step, timeTourist) {
    let answer = readlineSync.question(step.task);
    let time = getRandomInt(10, 20);
    if( answer == 1 ) {
        console.log('Що ж ви використали свій час! Маю надію, що вам висточить тепер його)')
        timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)
        resultStep(timeTourist)
    } else {
        resultStep(timeTourist)
    }
    return {timeTourist}
}
let handlerChose = function (step, timeTourist, backpack) {

    if (step.choseName == 'backpack' ) {
        let getBackpack = fnBackpack(step, backpack, timeTourist) 
        timeTourist =  getBackpack.timeTourist
        backpack = getBackpack.backpack
    }
    if (step.choseName == 'meet' ) {
        let getmMeet = fnMeet(step, timeTourist)
        timeTourist = getmMeet.timeTourist

    } 
    return {timeTourist, backpack}
}

export default handlerChose