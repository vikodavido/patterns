import {Command} from './Command.js'
import Time from '../TimeManager/Time.js'

function PathStepCommand(data, datastep) {
    return new Command((step) => {
        let getTime = new Time(data).getTime(datastep, [1,2])
        data.time = getTime.time

        step = {data, datastep};
        return step;
    });
}

export default PathStepCommand