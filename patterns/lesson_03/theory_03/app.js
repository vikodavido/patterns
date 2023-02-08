console.log("Hello, this is Theory #03");

const name = 'John';
const age = 25;
let sentence = name + ' is '+ age + ' years old'; // TODO 01: replace with template string
console.log(sentence);

// TODO 02. Convert to async function
function testPromise(arg) {
    return new Promise((a) => {console.log(a);})
        .then(() => console.log('Resolved'))
        .catch(() => console.log('Failed'))
}

// TODO 03: Move to separate file
class Circle {
    constructor(radius = 123) {
        this.radius = radius;
    }

    getSquare() { // rename to getArea
        return Math.PI * this.radius * this.radius;
    }
}

console.log("Circle radius = " + new Circle(10).getSquare());

// TODO 04. Extract to superclass BaseCar
class Car {
    mileage;
    constructor(mileage, color) {
        this.mileage = mileage;
        this.color = color;
        this.getMileage = function () {
            return this.mileage;
        }
        this.setColor = function (color) {
            this["color"] = color;
        }
    }
    drive() {
        this.mileage++;
        console.log(`driving ${this.color} car, total mileage: ${this.mileage}km`);
    }
}

new Car(123450, "white").drive();
