console.log("Hello, this is Homework #09");

class IntRandom {
    static nextInt(from, to) {
        return Math.floor(Math.random() * (to - from) + from);
    }
}

class Processor {
    process() {}
}

class FileProcessor extends Processor {
    constructor(id) {
        super();
        this.id = id;
    }

    process() {
        this.imitateLongProcessing();
    }

    imitateLongProcessing() {
        const millisToSleep = IntRandom.nextInt(500, 2000);

        console.log("Processing item #" + this.id);

        if (millisToSleep % 7 == 0) throw new Error("You are not lucky: the processing has failed");

        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, millisToSleep);

        console.log(`Item # ${this.id} processed in ${millisToSleep} ms`);
    }
}

class ExceptionDecorator extends Processor {
    constructor(decorated) {
        super();
        this.decorated = decorated;
    }

    process() {
        let hasError = false;
        do {
            try {
                this.decorated.process();
                hasError = false;
            } catch (e) {
                console.warn(e.toString());
                hasError = true;
            }
        } while (hasError);
    }
}

class TraceDecorator extends Processor {
    constructor(decorated) {
        super();
        this.decorated = decorated;
    }

    process() {
        // Trace can be added here
        this.decorated.process();
    }
}

const filesCount = IntRandom.nextInt(15, 25);
console.log("File to process: " + filesCount);

for (let i = 0; i < filesCount; i++) {
    let fileProcessor = new FileProcessor(i);
    fileProcessor = new ExceptionDecorator(fileProcessor);
    fileProcessor = new TraceDecorator(fileProcessor);

    fileProcessor.process();
}

console.log("Homework #09 Completed");
