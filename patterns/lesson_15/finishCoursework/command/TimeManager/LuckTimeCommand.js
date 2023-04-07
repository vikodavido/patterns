import {Command} from '../StepManager/Command.js'

function LuckTimeCommand(time) {
    return new Command((step) => {              
        time = time + 20
        step = {time}
        return step
    });
}

export default LuckTimeCommand
