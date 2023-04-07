import {StepManager} from './command/StepManager/Command.js'
import PathStepCommand from './command/StepManager/PathStepCommand.js'
import ChosebackpackStepCommand from './command/StepManager/ChosebackpackStepCommand.js'
import TrubbleStepCommand from './command/StepManager/TrubbleStepCommand.js'
import ChoseStepCommand from './command/StepManager/ChoseStepCommand.js'
import LuckStepCommand from './command/StepManager/LuckStepCommand.js'

class Step  {
    constructor(time, backpack) {
       this.time = time
       this.backpack = backpack
    }
    commandStep(step) {
        let stepManager = new StepManager();
        let dataStep = {
            time: this.time,
            backpack: this.backpack,
        }
        switch(step.categoryStep) {
            case "path" : return stepManager.execute(new PathStepCommand(dataStep, step));
            case "chosebackpack" : return stepManager.execute(new ChosebackpackStepCommand(dataStep, step))
            case "trubble" : return stepManager.execute(new TrubbleStepCommand(dataStep, step));
            case "chose" : return stepManager.execute(new ChoseStepCommand(dataStep, step));
            case "luck" : return stepManager.execute(new LuckStepCommand(dataStep, step));
        }
         
    }
}
export default Step
