class Shoe {
  constructor(size) {
    this.size = size;
  }

  changeSize(newSize) {
    this.size = newSize;
  }

  incSize() {
    return this.size++;
  }
}

// classical inheritence

class Boot extends Shoe {}

let hikingShoe = new Shoe();

// prototypal inheritence

const shoe = new Shoe();
const boot = Object.create(shoe);
const hikingShoe2 = Object.create(boot);
