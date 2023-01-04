//before init
console.log(add(4));
// console.log(substract(5)); // returns error before init because it is treated like a variable
//* In short, use function declarations when you want to create a function on the global scope and make it available throughout your code. 
//* Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.

// function declaration, you cannot pass to another function
// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
function add(number) {
    return number;
}

// anonymous function 
//* (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
() => console.log('hello IIFE'); // won't print
(() => console.log('hello IIFE'))(); // will print
(function() {console.log('hello IIFE')})(); // will print
// function expression (can be use as an IIFE)
const substract = function (number) {
    console.log(number);
    return number;
}
const substract2 = function () {
    substract(2);
    console.log('expression');
}

substract2();