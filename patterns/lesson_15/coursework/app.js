console.log("Hello, this is Coursework");

import steps from './state/step.js'; 

import resultStep from './result/resultStep.js'
import resultGame from './result/resultGame.js'

import handlerTime from './handler/handlerTime.js'
import handlerTrubble from './handler/handlerTrubble.js'
import handlerStepTask from './handler/handlerStepTask.js'
import handlerChose from './handler/handlerChose.js'

import { TrubbleBuilderMap, TrubbleBuilderRain, TrubbleBuilderShoes, TrubbleBuilderFood } from './paterns/builder.js'

let timeTourist = handlerStepTask(steps[0])
let backpack;
let i = 1

while (timeTourist > 0 && i < steps.length) {
    console.log('//------------------------------------------------------------------------//')
    let step = steps[i]
    console.log(step.text);
    if (step.categoryStep == 'chose' ) {
        let chose = handlerChose(step, timeTourist, backpack)
        timeTourist = chose.timeTourist
        backpack = chose.backpack
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



    