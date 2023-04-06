import {Command} from '../StepManager/Command.js'

function PathTimeCommand(time, answer) {
    return new Command((step) => {            
        time = answer == 1 ? time - 10 : time - 20;
        step = {time}
        return step
    });
}

export default PathTimeCommand
