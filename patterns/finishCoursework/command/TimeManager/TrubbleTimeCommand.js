import {Command} from '../StepManager/Command.js'

function TrubbleTimeCommand(time, answer, datastep) {
    return new Command((step) => {  
        if(answer == datastep.answer) {
            console.log('Відповідь правильна! ви отримали 20 хвилин')
            time = time + 20
        } else { 
            console.log('Відповідь не правильна! ви втратили 30 хвилин')
            time = time - 30;
        }          
        step = {time}
        return step
    });
}

export default TrubbleTimeCommand
