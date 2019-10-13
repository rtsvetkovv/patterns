class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.coast = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.coast = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.coast = 500;
  }
}

class MembershipFactory {
  static listOfMemberships = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = 'simple') {
    const Membership =
      MembershipFactory.listOfMemberships[type] ||
      MembershipFactory.listOfMemberships.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function() {
      return `${this.name} (${this.type}): ${this.coast}`;
    };
    return member;
  }
}

const factory = new MembershipFactory();

const members = [
  factory.create('Roman', 'simple'),
  factory.create('Vlad', 'standard'),
];

members.forEach(member => {
  console.log(member.define());
});
