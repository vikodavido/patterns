import {
  ContainerBuilder,
  Reference,
  YamlFileLoader,
} from "node-dependency-injection";

console.log("Hello, this is Homework #06");

class Car {
  #make;
  #model;
  #engine;
  #year;
  constructor(make, model, engine, year) {
    this.#make = make;
    this.#model = model;
    this.#engine = engine;
    this.#year = year;
  }

  start() {
    console.log(
      `Starting ${this.#make} ${this.#model} car, manufactured ${this.#year}`
    );
    this.#engine.startEngine();
  }
}

class DieselEngine {
  #hp = 0;
  constructor() {}

  setHp(hp) {
    this.#hp = hp;
  }

  startEngine() {
    console.log(`Diesel engine with ${this.#hp} hp has been started`);
  }
}

class ElectricEngine {
  #hp = 0;
  constructor() {}

  setHp(hp) {
    this.#hp = hp;
  }

  startEngine() {
    console.log(`Electric engine with ${this.#hp} hp has been started`);
  }
}

class DieselEngineFactory {
  #dieselEngine;
  constructor(dieselEngine) {
    this.#dieselEngine = dieselEngine;
  }
  getEngine(hp) {
    this.#dieselEngine.setHp(hp);
    return this.#dieselEngine;
  }
}

class ElectricEngineFactory {
  #electricEngine;
  constructor(electricEngine) {
    this.#electricEngine = electricEngine;
  }
  getEngine(hp) {
    this.#electricEngine.setHp(hp);
    return this.#electricEngine;
  }
}

class CarFactory {
  #dieselEngineFactory;
  #electricEngineFactory;
  constructor(dieselEngineFactory, electricEngineFactory) {
    this.#electricEngineFactory = electricEngineFactory;
    this.#dieselEngineFactory = dieselEngineFactory;
  }

  getCar(make, model, year, hp) {
    if (make !== "Tesla")
      return new Car(
        make,
        model,
        this.#dieselEngineFactory.getEngine(hp),
        year
      );

    return new Car(
      make,
      model,
      this.#electricEngineFactory.getEngine(hp),
      year
    );
  }
}

let container = new ContainerBuilder();

let loader = new YamlFileLoader(container);
// TODO: hard (optional): configure services using config file
// loader.load(configPath + "/serviceconfig.yml");

container.register("dieselEngine", DieselEngine);
container.register("electricEngine", ElectricEngine);
container.register("dieselEngineFactory", DieselEngineFactory);
container.register("electricEngineFactory", ElectricEngineFactory);
container.register("carFactory", CarFactory);
// TODO: add missing registrations

container
  .register("car", Car)
  .addArgument("Mercedes")
  .addArgument("SLS AMG")
  .addArgument(new Reference("dieselEngine"))
  .addArgument(2022);
// code above identical to below:
// new Car("Mercedes", "SLS", new DieselEngine(), 2022).start()
let car = container.get("car").start();

car = container.get("carFactory").getCar("Audi", "A5", 2020, 170).start();
car = container.get("carFactory").getCar("Tesla", "Model S", 2015, 259).start();
