class Human {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
};

const people = [
  new Human('Daniel', 23),
  new Human('Mela', 21)
];

console.log(people[0]._name);