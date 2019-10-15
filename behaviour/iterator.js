class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

function* generator(array) {
  let index = 0;
  while (index < array.length) {
    yield array[index++];
  }
}

const iterator = new MyIterator(['this', 'is', 'iterator']);
const gen = generator(['this', 'is', 'iterator']);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// for (const value of iterator) {
//   console.log(value);
// }
