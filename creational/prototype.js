const car = {
  wheels: 4,

  init() {
    console.log(`I have a ${this.wheels} wheels. My owner is ${this.name}`);
  },
};

const carWithOwner = Object.create(car, {
  name: {
    value: 'Roman',
  },
});

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
