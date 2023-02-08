console.log("Hello, this is Homework #06");

class LuckGenerator {
    getType() {
        throw new Error('Method not implemented.');
    }

    generateNext() {
        throw new Error('Method not implemented.');
    }
}

class DefaultLuckGenerator extends LuckGenerator {
    getType() {
        return "Default";
    }

    generateNext() {
        return 0;
    }
}

class LuckFactory {
    getLuckGenerator(name) {
        // TODO: Implement factory here
        return new DefaultLuckGenerator();
    }
}

function executeSpecificLuckGenerator(luckType) {
    console.log(`Testing luck generator of type '${luckType}'`);

    var luckGenerator = new LuckFactory().getLuckGenerator(luckType);

    for (iteration = 0; iteration < 5; iteration++) {
        console.log(`Test #${iteration}, LuckGenerator '${luckGenerator.getType()}': ${luckGenerator.generateNext()}`);
    }
}

executeSpecificLuckGenerator("Dice");
console.log("");
executeSpecificLuckGenerator("Coin");
