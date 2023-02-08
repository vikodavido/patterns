console.log("Hello, this is Theory #02");

const rp = require("request-promise");

(async () => {
    let response = await rp("https://robotdreams.cc/"); // convert to const

    console.log("I'm async, response size: " + response.length + " bytes");
})();

class MyClass { // rename to Circle
    constructor(radius = 123) {
        this.radius = radius;
    }

    getSquare() { // rename to getArea
        return Math.PI * this.radius * this.radius;
    }
}

console.log("Hello");

console.log("Circle radius = " + new MyClass(10).getSquare());