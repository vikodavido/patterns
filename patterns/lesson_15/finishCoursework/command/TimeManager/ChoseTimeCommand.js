import {Command} from '../StepManager/Command.js'

function ChoseTimeCommand(time, answer) {
    return new Command((step) => {              
        time = answer == 1 ? time : time - 20;
        step = {time}
        return step
    });
}

export default ChoseTimeCommand
