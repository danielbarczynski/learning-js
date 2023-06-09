class Car {
  static numberOfCars = 0;
  constructor(model) {
    this.model = model;
    Car.numberOfCars++;
  }
}

const car1 = new Car("BMW");
const car2 = new Car("Audi");

console.log(Car.numberOfCars);
console.log(car1.model);
console.log(car2.model);