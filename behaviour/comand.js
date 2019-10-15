class MyMath {
  constructor(initialValue = 0) {
    this.number = initialValue;
  }

  square() {
    return this.number * this.number;
  }

  cube() {
    return this.number ** 3;
  }
}

class Comand {
  constructor(subject) {
    this.subject = subject;
    this.comandExecuted = [];
  }

  execute(comand) {
    this.comandExecuted.push(comand);
    return this.subject[comand]();
  }
}

const x = new Comand(new MyMath(2));

console.log(x.execute('cube'));
console.log(x.comandExecuted);
