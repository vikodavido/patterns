import {Command} from './Command.js'
function LuckStepCommand(data, datastep) {
    return new Command((step) => {
        data.time = data.time + 20
        step = {data, datastep};
        return step;
    });
  }
export default LuckStepCommand