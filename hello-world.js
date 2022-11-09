console.log('hello world'); // node .
console.log(`hello
world
multiline`);

//* Nested Array
const nestedArray = [[4, 'j'], [5, 'g']];
let myData = nestedArray[1][1];
console.log(myData);
nestedArray.push([9, 9]); // add last element
nestedArray.pop(); // remove last element
nestedArray.shift(); // remove first element
nestedArray.unshift([1, 1]); // add first element
console.log(nestedArray);

//* Parameters & Arguments
const arrowF = (a, b) => console.log([a, b]); // parameters
arrowF(1, 2); // arguments

//* Scope
function scope() {
    var myV = 5;
    globall = 6;
    console.log(myV);
}
// console.log(globall); // error, not defined
// console.log(myV); // error (even for var)

//* Assigning returned value
const assign = (x, y) => { // must be with curly brackets because of return
    return x + y;
}

let assigned = assign(5, 5);
console.log(assigned);

//* Equals

let eq = 3 == 3 ? true : false;
let eq2 = 3 == '3' ? true : false;
let eq3 = 3 === 3 ? true : false;
let eq4 = 3 === '3' ? true : false;
let eq5 = 3 != '3' ? true : false;
let eq6 = 3 !== '3' ? true : false;

console.log(eq);
console.log(eq2);
console.log(eq3);
console.log(eq4);
console.log(eq5);
console.log(eq6);

//* Switch
const rateValue = (value) => {
    if(value < 0)
        return;

    switch (value) {
        case 1:
        case 2:
        case 3:
            return 'low'; // break not neccessary while returning
        case 5:
            console.log('mid');
            break;
        default:
            return 'high';
    }
}

console.log(rateValue(2));
console.log(rateValue(20));
console.log(rateValue(-20));
rateValue(5);

//* Objects
const dog = {
    name: 'Miky',
    age: 10
}

dog['canSwim'] = false;
dog.canBark = true;
delete dog.age;

console.log(dog);

//* Complex structures
var music = [
    {
        genre: 'pop',
        popularity: 'high',
        artists: [
            {
                name: 'Rihanna',
                age:  50
            },
            {
                name: 'Mr Kitty',
                age: 30
            }
        ],
        isInPoland: true  
    },
    {
        genre: 'soundtrack',
        popularity: 'low'
    }
]

let complexData = music[0].artists[0].name;
console.log(complexData);

//* Rest Operator
function addNums(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(addNums(1, 2, 3, 4, 5, 6));

//* Spread Operator
const arr1 = [100, 200, 300];
let arr2;
let arr3;

(function () {
    arr2 = [...arr1]; // it's like cloning
    arr3 = arr1; // not cloning
    arr1[0] = 666;    
})();

console.log(arr1);
console.log(arr2);
console.log(arr3);

//* Return Object

const returnObject = (name, age, gender) => ({ name, age, gender });

console.log(returnObject('michael', 30, 'male'));

//* Class and Getters & Setters
class Cat {
    // const age; // not working
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(updatedName) {
        this._name = updatedName;
    }
}

let cat = new Cat('Tino');

console.log(cat.name);
console.log(cat.name);

cat.name = 'Negra';

console.log(cat.name);

const captilzeStringg = str => str.toUpperCase();

export { captilzeStringg };