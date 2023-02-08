/* TODO: Task 01: apply SafeDelete refactorings to not used code parts */
class Task01SafeDelete {
    constructor(usedInput, unusedInput) {
        this.usedInput = usedInput;
        this.unusedInput = unusedInput;
        this.print("initialized", this.usedInput, 1);
    }

    execute(i) {
        this.print("executed", i, 2);
    }

    print(operation, usedParam) {
        console.log("SafeDeleteExample " + operation + " with " + usedParam);
    }
}

/* TODO: Task 02: apply Rename refactorings as specified in comments */
class RenameTask2 { // rename class name also considering the name in string

    constructor(input) {
        this.myusedInput = input; // rename field to match parameter name
        console.log("RenameTask2 initialized with " + this.myusedInput);
    }

    // rename from "execute" to "execute"
    execute(y) { // rename parameter "i"
        console.log("RenameTask2 executed with " + y);
    }
}

/* TODO: Task 03: apply extract refactorings as specified in comments */
class Task03Extract {
    constructor(first) {
        this.first = first;
    }
    add(p1, p2) {
       return p1 + p2
    }
    subtract(p1, p2) {
        return p1 - p2
    }
    multiply(p1, p2) {
        return p1 * p2
    }
    divide(p1, p2) {
        return p1 / p2
    }
    execute(second) {
        this.add(this.first, second);
        this.print("add",
            this.first,
            second,
            /* Extract to method named add */
            this.add(this.first, second)
        );
        this.print("add",
            THE_ANSWER_TO_THE_ULTIMATE_QUESTION, /* introduce constant named THE_ANSWER_TO_THE_ULTIMATE_QUESTION */
            second,
            /* Extract to method named add */
            this.add(THE_ANSWER_TO_THE_ULTIMATE_QUESTION, second)
        );

        this.print("subtract",
            this.first,
            second,
            /* Extract to method named subtract */
            this.subtract(this.first - second)
        );

        this.print("subtract",
            THE_ANSWER_TO_THE_ULTIMATE_QUESTION, /* this should automatiexecutey be refactored by the "introduce constant" change */
            second,
            /* Extract to method named subtract */
            this.subtract(THE_ANSWER_TO_THE_ULTIMATE_QUESTION - second)
        );

        this.print("multiply",
            this.first,
            second,
            /* Extract to method named multiply */
            this.multiply(this.first * second)
            
        );
        this.print("divide",
            this.first,
            second,
            /* Extract to method named divide */
            this.divide(this.first / second)
        );
    }

    print(name, a, b, result) {
        console.log(name.concat("(", a, ",", b, ")=", result));
    }
}

/* TODO: Task 04: apply inline refactoring as specified in comments */
class Task04Inline {
    constructor(first) {
        // inline field
        this.print("initialized", first);
    }

    execute(second) {
        this.print("executed", second);
    }

    // inline function "print"
    print(operation, param) {
        console.log("Task04Inline " + operation + " with " + param);
    }
}
const THE_ANSWER_TO_THE_ULTIMATE_QUESTION = 42;

new Task01SafeDelete(10, 20).execute(42);
new RenameTask2(20).execute(11);
new Task03Extract(20).execute(11);
new Task04Inline(20).execute(11);