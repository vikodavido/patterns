import handlerTime from '../handler/handlerTime.js'
import readlineSync from 'readline-sync';


let answerHandler = function (timeTourist, step, time, val) {
    console.log('Нажаль у вашому рюкзаку немає ' + val + '((')
    console.log('Ваш час скорочується на ' + time + ' хвилин' )
    console.log('//------------------------------------------------------------------------//')
    console.log('Я пропоную вам вгадати одну загадку і заробити часу!');
    timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)

    let answer = readlineSync.question(step.task);

    if( answer == step.answer ) {
        console.log('Відповідь правильна!!!. За це вам додається : ' + time + ' хвилин')
        timeTourist = handlerTime(timeTourist, 'AddCommand', time)
    }  else {
        console.log('Відповідь не правильна(((. За це знімається : ' + time + ' хвилин')
        timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)
    }
    console.log('//------------------------------------------------------------------------//')
    return timeTourist
}

export default answerHandler