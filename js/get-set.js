class Car {
  constructor(power, gas) {
    this._power = power;
    this._gas = gas;
  }

  get power() {
    return `${this._power}hp`;
  }

  get gas() {
    return `${this._gas}l ${this._gas / 50 * 100}%`;
  }

  set gas(value) {
    if (value < 0)
      value = 0;
    else if (value > 50)
      value = 50;
    this._gas = value;
  }
}

const car1 = new Car(500, 30);
car1.gas = 200000;
console.log(car1.power + ' ' + car1.gas);
