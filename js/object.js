const car = {
  make: 'Lamborghini',
  model: 'Huracan',
  drive: function() {
    console.log('speeding');
  },
  brake() {
    console.log('braking');
  }
};

console.log(car.model);
car.drive();
car.brake();