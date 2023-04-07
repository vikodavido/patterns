function add (count, value) {return count + value};
function sub (count, value) {return count - value};

var Command = function (execute, value) {
    this.execute = execute;
    this.value = value;
}
var AddCommand = function (value) {
    return new Command(add, value);
};
var RemoveCommand = function (value) {
    return new Command(sub, value);
};
var Calculator = function (val) {
    var commands = [];
    var current = val;
    function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name;
    }
    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            action(command)
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

export { AddCommand, RemoveCommand, Calculator }