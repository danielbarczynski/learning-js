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
class Boot extends Shoe { }
const boot = new Boot();
const shoe = new Shoe();

boot.size = 5;
shoe.size = 10;
boot.incSize();
shoe.incSize();

console.log(boot);
console.log(shoe);

// prototypal inheritence
const shoe2 = new Shoe();
const runningShoe = Object.create(shoe2);

runningShoe.size = 10; // no intellisense
shoe2.size = 20;

console.log(runningShoe);
console.log(shoe2);