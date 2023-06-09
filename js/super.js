class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, age, woof) {
    super(name, age);
    this.woof = woof;
  }
}

class Cat extends Animal {
  constructor(name, age, meow) {
    super(name, age);
    this.meow = meow;
  }
}

const dog = new Dog('Doggo', 5, 'woof');
const cat = new Cat('Tino', 2, 'meow');

console.log(dog);
console.log(cat);