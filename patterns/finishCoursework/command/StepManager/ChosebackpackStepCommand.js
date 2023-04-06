import {Command} from './Command.js'
import Time from '../TimeManager/Time.js';

function ChosebackpackStepCommand(data, datastep) {
    return new Command((step) => {
        let getTime = new Time(data).getTime(datastep, [1,2,3])
        data.time = getTime.time
        data.backpack = getTime.backpack
        step = {data, datastep};
        return step;
    });
}
export default ChosebackpackStepCommand