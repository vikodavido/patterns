import steps from './state/step.js'

import resultStep from './result/resultStep.js'
import resultGame from './result/resultGame.js'
import prefaceStep from './result/prefaceStep.js'
import Step from './Step.js'

let i = 0
let time = 100
let backpack = []
  

while (time > 0 && i < steps.length) {
    console.log('//------------------------------------------------------------------------//')
    let step = steps[i]
    prefaceStep(step)

    let newstep = new Step(time, backpack)
    let commandStep = newstep.commandStep(step)

    time = commandStep.data.time
    backpack = commandStep.data.backpack

    i++
    resultStep({time,backpack})  
}
resultGame(time)

