class OldCalc {
  operations(t1, t2, type) {
    switch (type) {
      case 'add':
        return t1 + t2;
      case 'sub':
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }

  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }
  operations(t1, t2, type) {
    switch (type) {
      case 'add':
        return this.calc.add(t1, t2);
      case 'sub':
        return this.calc.sub(t1, t2);
      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
const oldCalcResult = oldCalc.operations(1, 1, 'add');
console.log(oldCalcResult);

const newCalc = new NewCalc();
const newCalcResult = newCalc.add(2, 2);
console.log(newCalcResult);

const calcAdapter = new CalcAdapter();
const adapterCalcResult = calcAdapter.operations(4, 2, 'sub');
console.log(adapterCalcResult);
