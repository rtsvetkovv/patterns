class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsobilities() {}

  work() {
    return `${this.name} do ${this.responsobilities()}`;
  }

  getPaid() {
    return `${this.name} has salary to equal ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsobilities() {
    return 'develop';
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsobilities() {
    return 'testing';
  }
}

const roman = new Developer('Roman', 65000);
console.log(roman.work());
console.log(roman.getPaid());

const jul = new Tester('July', 60000);
console.log(jul.work());
console.log(jul.getPaid());
