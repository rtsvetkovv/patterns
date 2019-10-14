class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    const condidate = this.getCar(model);
    if (condidate) return condidate;

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }

  getCar(model) {
    return this.cars.find(car => car.model === model);
  }
}

const factory = new CarFactory();
const bmw = factory.create('bmw', 10000);
const audi = factory.create('audi', 12000);
const newBmw = factory.create('bmw', 9000);

console.log(bmw);
console.log(newBmw);
