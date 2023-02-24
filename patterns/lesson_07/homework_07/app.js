console.log("Hello, this is Homework #07");

class AmericanPlayer {
    constructor(id, name, heightFootIn) {
        this._id = id;
        this._name = name;
        this._heightFootIn = heightFootIn;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get heightFootIn() {
        return this._heightFootIn;
    }
}

class EuropeanPlayer {
    constructor(id, name, heightCm) {
        this._id = id;
        this._name = name;
        this._heightCm = heightCm;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get heightCm() {
        return this._heightCm;
    }
}

class EuropeanPlayerAdapter {
    constructor(americanPlayer) {
        this._id = americanPlayer.id;
        this._name = americanPlayer.name;
        this._heightFootIn = americanPlayer.heightFootIn;
        this._heightCm = 0;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get heightCm() {       
        return this.convert();
    }
    convert() {
        return Math.floor(Number(this._heightFootIn.replace(/[^\d]/g, '')) / 0.32808);
    }
}

class AmericanPlayerAdapter {
    constructor(europeanPlayer) {
        this._id = europeanPlayer.id;
        this._name = europeanPlayer.name;
        this._heightCm = europeanPlayer.heightCm
        this._heightFootIn = "0' 0\"";
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get heightFootIn() {
        return this.convert();
    }
    convert() {
        let foot = Math.round(this._heightCm * 0.32808)/10;
        return String(foot).split('.').join('\' ') + '\"';
    }
}

const americanPlayer = new AmericanPlayer(123, "Babe Ruth", "6' 2\"");
const europeanPlayerAdapter = new EuropeanPlayerAdapter(americanPlayer);

console.log(`Original American Player: ${americanPlayer.id}, ${americanPlayer.name}, ${americanPlayer.heightFootIn}`);
console.log(`Adapted American Player: ${europeanPlayerAdapter.id}, ${europeanPlayerAdapter.name}, ${europeanPlayerAdapter.heightCm}`);

const europeanPlayer = new EuropeanPlayer(123, "Babe Ruth", 188);
const americanPlayerAdapter = new AmericanPlayerAdapter(europeanPlayer);

console.log();
console.log(`Original European Player: ${europeanPlayer.id}, ${europeanPlayer.name}, ${europeanPlayer.heightCm}`);
console.log(`Adapted European Player: ${americanPlayerAdapter.id}, ${americanPlayerAdapter.name}, ${americanPlayerAdapter.heightFootIn}`);
