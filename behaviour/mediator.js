class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const roman = new User('Roman');
const vlad = new User('Vladislav');
const igor = new User('Igor');

const room = new ChatRoom();

room.register(roman);
room.register(vlad);
room.register(igor);

vlad.send('hello', roman);
roman.send('hello too', vlad);
igor.send('Hello everyone');
