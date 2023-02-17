console.log("Hello, this is Homework #06");

class LuckGenerator {
    constructor (type, max) {
        this.type = type
        this.max = max
    }
    
    getType() {
        return this.type
        // throw new Error('Method not implemented.');
    }

    generateNext () {
            let min = Math.ceil(1);
            let max = Math.floor(this.max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        // throw new Error('Method not implemented.');
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

    getLuckGenerator(type) {
        // TODO: Implement factory here
        let max;
        if (type === 'Dice'){
            max = 6
        }
        if (type === 'Coin'){
            max = 2
        }     
        return new LuckGenerator(type, max);
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
