console.log("Hello, this is Coursework");

import steps from './state/step.js'; 
import getRandomInt from './helper/randomInt.js'
import choseBackpack from './helper/choseBackpack.js'

import resultStep from './result/resultStep.js'
import resultGame from './result/resultGame.js'

import handlerTime from './handler/handlerTime.js'
import handlerTrubble from './handler/handlerTrubble.js'
import handlerStepTask from './handler/handlerStepTask.js'

import readlineSync from 'readline-sync';
import { TrubbleBuilderMap, TrubbleBuilderRain, TrubbleBuilderShoes, TrubbleBuilderFood } from './paterns/builder.js'

let timeTourist = getRandomInt(50, 100);
let backpack;
let i = 0
while (timeTourist > 0 && i < steps.length) {
    console.log('//------------------------------------------------------------------------//')
    let step = steps[i]
    console.log(step.text);
    if (step.categoryStep == 'task' ) {
        handlerStepTask(step, timeTourist)
    }
    if (step.categoryStep == 'chose' ) {
        if (step.choseName == 'backpack' ) {
            let handlerChoseBackpack = choseBackpack(step, backpack);
            let time = handlerChoseBackpack.time;
            backpack = handlerChoseBackpack.backpack;

            timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)
            resultStep(timeTourist)
        }
        if (step.choseName == 'meet' ) {
            let answer = readlineSync.question(step.task);
            let time = getRandomInt(10, 20);
            if( answer == 1 ) {
                console.log('Що ж ви використали свій час! Маю надію, що вам висточить тепер його)')
                timeTourist = handlerTime(timeTourist, 'RemoveCommand', time)
                resultStep(timeTourist)
            } else {
                resultStep(timeTourist)
            }
        }    
    }
    if (step.categoryStep == 'trubble' ) {
        var trubbleBuilder;
        if (step.trubbleName == 'TrubbleBuilderFood') {

            trubbleBuilder = new  TrubbleBuilderFood();
            timeTourist = handlerTrubble(timeTourist, trubbleBuilder, backpack, step, 'їжі')  
        }
        if (step.trubbleName == 'TrubbleBuilderShoes') {
            
            trubbleBuilder = new  TrubbleBuilderShoes();
            timeTourist = handlerTrubble(timeTourist, trubbleBuilder, backpack, step, 'взуття')     
        }
        if (step.trubbleName == 'TrubbleBuilderRain') {

            trubbleBuilder = new  TrubbleBuilderRain();
            timeTourist = handlerTrubble(timeTourist, trubbleBuilder, backpack, step, 'дощовика')   
        }
        if (step.trubbleName == 'TrubbleBuilderMap') {

            trubbleBuilder = new  TrubbleBuilderMap();
            timeTourist = handlerTrubble(timeTourist, trubbleBuilder, backpack, step, 'карти')  
        }
        resultStep(timeTourist)
    }
    if (step.categoryStep == 'luck' ) {
        timeTourist = handlerTime(timeTourist, 'AddCommand')
        resultStep(timeTourist)      
    }
    i++
    console.log('//------------------------------------------------------------------------//')
}
resultGame(timeTourist)



    