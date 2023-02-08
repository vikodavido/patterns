console.log("Hello, this is Homework #02");

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

    print(operation, usedParam, unusedParam) {
        console.log("SafeDeleteExample " + operation + " with " + usedParam);
    }

    // printTest( usedParam,  unusedParam) {
    //     console.log("SafeDeleteExample received 0");
    // }
}

/* TODO: Task 02: apply Rename refactorings as specified in comments */
class Task02Rename { // rename class name also considering the name in string

    constructor(input) {
        this.usedInput = input; // rename field to match parameter name

        console.log("Task02Rename initialized with " + this.usedInput);
    }

    // rename from "call" to "execute"
    call(i) { // rename parameter "i"
        console.log("Task02Rename executed with " + i);
    }
}

/* TODO: Task 03: apply extract refactorings as specified in comments */
class Task03Extract {
    constructor(first) {
        this.first = first;
    }

    execute(second) {
        this.print("add",
            this.first,
            second,
            /* Extract to method named add */
            this.first + second
        );
        this.print("add",
            42, /* introduce constant named THE_ANSWER_TO_THE_ULTIMATE_QUESTION */
            second,
            /* Extract to method named add */
            42 + second
        );

        this.print("subtract",
            this.first,
            second,
            /* Extract to method named subtract */
            this.first - second
        );

        this.print("subtract",
            42, /* this should automatically be refactored by the "introduce constant" change */
            second,
            /* Extract to method named subtract */
            42 - second
        );

        this.print("multiply",
            this.first,
            second,
            /* Extract to method named multiply */
            this.first * second
        );
        this.print("divide",
            this.first,
            second,
            /* Extract to method named divide */
            this.first / second
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
        this.first = first;
        this.print("initialized", this.first);
    }

    execute(second) {
        this.print("executed", second);
    }

    // inline function "print"
    print(operation, param) {
        console.log("Task04Inline " + operation + " with " + param);
    }
}

new Task01SafeDelete(10, 20).execute(42);
new Task02Rename(20).call(11);
new Task03Extract(20).execute(11);
new Task04Inline(20).execute(11);