import {StepManager} from '../StepManager/Command.js'
import setQuestion from '../../helper/setQuestion.js'
import PathTimeCommand from '../TimeManager/PathTimeCommand.js'
import ChosebackpackTimeCommand from '../TimeManager/ChosebackpackTimeCommand.js'
import TrubbleTimeCommand from '../TimeManager/TrubbleTimeCommand.js'
import ChoseTimeCommand from '../TimeManager/ChoseTimeCommand.js'




class Time {
    constructor(data) {
        this.data = data
    }
    getTime(datastep, valid) {
        let answer = setQuestion(datastep.task)
        if (valid.includes(Number(answer))) {
            return this.timeHandler(answer, this.data, datastep)
        } else {
            console.log('Треба вибрати один з варінтів, спробуй ще раз!')
            return this.getTime(datastep, valid)
        }
    }
    timeHandler (answer, data, datastep) {
        let stepManager = new StepManager();
        switch(datastep.categoryStep) {
            case "path" : return stepManager.execute(new PathTimeCommand(data.time, answer));
            case "chosebackpack" : return stepManager.execute(new ChosebackpackTimeCommand(data.time, answer, data.backpack));
            case "trubble" : return stepManager.execute(new TrubbleTimeCommand(data.time, answer, datastep));
            case "chose" : return stepManager.execute(new ChoseTimeCommand(data.time, answer));
        }
    }
}
export default Time