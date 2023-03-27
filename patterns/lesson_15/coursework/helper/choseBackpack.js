import backpackShop from '../state/backpackShop.js'
import readlineSync from 'readline-sync';
import getRandomInt from '../helper/randomInt.js'

let choseBackpack = function(step, backpack) {
    let answer = readlineSync.question(step.task);
    let time;
    if( answer == 1 ) {
        time = getRandomInt(5, 10)
        console.log('Ви вибрали рюкзак єконом. За нього знімається : ' + time + ' хвилин')
        backpack = backpackShop.econom
    } else if( answer == 2 ) {
        time = getRandomInt(15, 20)
        console.log('Ви вибрали рюкзак комфорт. За нього знімається : ' + time + ' хвилин')
        backpack = backpackShop.comfort
    } else {
        time = getRandomInt(25, 30)
        console.log('Ви вибрали рюкзак преміум. За нього знімається : ' + time + ' хвилин')
        backpack = backpackShop.premium
    }
    return {backpack, time}
}

export default choseBackpack