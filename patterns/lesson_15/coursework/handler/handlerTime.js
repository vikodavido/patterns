import { AddCommand, RemoveCommand, Calculator } from '../paterns/command.js'
import getRandomInt from '../helper/randomInt.js'

let handlerTime = function (timeTourist, command, time = 0) {
    var calculator = new Calculator(timeTourist);
    let istime = time > 0 ? time : getRandomInt(5, 20)
    calculator = new Calculator(timeTourist);
    if (command == 'RemoveCommand') {
        calculator.execute(new RemoveCommand(istime)); 
    }
    if (command == 'AddCommand') {
        calculator.execute(new AddCommand(istime)); 
    }
    return calculator.getCurrentValue()
    
}

export default handlerTime