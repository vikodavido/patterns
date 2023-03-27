import readlineSync from 'readline-sync';
import getRandomInt from '../helper/randomInt.js'

let handlerStepTask = function (step) {
    let answer = readlineSync.question(step.task);
    let timeTourist;
    if( answer == 1) {
        timeTourist = getRandomInt(50, 100);
        console.log('Ви вибрали шлях у гору, через ліс. На цей підйом у вас всього: ' + timeTourist + ' хвилин')
    } else {
        timeTourist = getRandomInt(80, 120);
        console.log('Ви вибрали шлях у гору, вздовж річки. На цей підйом у вас всього: ' + timeTourist + ' хвилин')
    }
    return timeTourist
}
export default handlerStepTask