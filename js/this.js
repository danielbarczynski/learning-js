// this = reference to an object
const car = {
  make: 'Lamborghini',
  model: 'Huracan',
  drive: function() {
    console.log(`driving ${this.model}`); // object, not variable
  },
};