import readlineSync from 'readline-sync';

let handlerStepTask = function (step, timeTourist) {
    let answer = readlineSync.question(step.task);
    if( answer == 1) {
        console.log('Ви вибрали шлях у гору, через ліс. На цей підйом у вас всього: ' + timeTourist + ' хвилин')
    } else {
        console.log('Ви вибрали шлях у гору, вздовж річки. На цей підйом у вас всього: ' + timeTourist + ' хвилин')
    }
}
export default handlerStepTask