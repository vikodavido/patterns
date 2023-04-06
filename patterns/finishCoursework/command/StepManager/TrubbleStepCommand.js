import {Command} from '../StepManager/Command.js'
import Reserve from '../../helper/reserve.js';
import Time from '../TimeManager/Time.js';

function TrubbleStepCommand(data, datastep) {
    return new Command((step) => {
        if(data.backpack.includes(datastep.problem)) {
            data.backpack = new Reserve(data.backpack).take()
            console.log('Ви маєте: ' + datastep.problem_text + '!')
        } else {
            console.log('Ви не маєте: ' + datastep.problem_text + '. Відгадай загадку та отримай трохи часу!')
            let getTime = new Time(data).getTime(datastep, [1,2,3])
            data.time = getTime.time
        }
        step = {data, datastep};
        return step;
    });
}

export default TrubbleStepCommand