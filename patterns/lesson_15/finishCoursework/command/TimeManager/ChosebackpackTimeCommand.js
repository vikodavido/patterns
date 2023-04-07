import {Command} from '../StepManager/Command.js'
import backpackShop from '../../state/backpackShop.js'

function ChosebackpackTimeCommand(time, answer, backpack) {
    return new Command((step) => {  
        if(answer == 1) time = time - 10, backpack = backpackShop.econom      
        if(answer == 2) time = time - 20, backpack = backpackShop.comfort
        if(answer == 3) time = time - 30, backpack = backpackShop.premium 
        step = {time, backpack}
        return step
    });
}

export default ChosebackpackTimeCommand
