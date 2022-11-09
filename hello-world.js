console.log('hello world'); // node .
console.log(`hello
world
multiline`);

// Nested Array
const nestedArray = [[4, 'j'], [5, 'g']];
let myData = nestedArray[1][1];
console.log(myData);
nestedArray.push([9, 9]); // add last element
nestedArray.pop(); // remove last element
nestedArray.shift(); // remove first element
nestedArray.unshift([1, 1]); // add first element
console.log(nestedArray);

// Parameters & Arguments
const arrowF = (a, b) => console.log([a, b]); // parameters
arrowF(1, 2); // arguments