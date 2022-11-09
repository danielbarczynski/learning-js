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

console.log(eq);
console.log(eq2);
console.log(eq3);
console.log(eq4);
