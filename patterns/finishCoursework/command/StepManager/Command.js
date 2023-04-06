class StepManager {
    constructor() {
      this.step = {};
    }
   
    execute(command, ...args) {
      return command.execute(this.step, ...args);
    }
}
class Command {
    constructor(execute) {
      this.execute = execute;
    }
}
   
export {StepManager, Command}



