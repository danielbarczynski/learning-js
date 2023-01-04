//before init
console.log(add(4));
// console.log(substract(5)); // returns error before init because it is treated like a variable

// function declaration, you cannot pass to another function
function add(number) {
    return number;
}

// anonymous function 
() => console.log('hello anonymous function'); // won't print
(() => console.log('hello anonymous function'))(); // will print
// (() => substract(6))(); // cannot access before initialization
(() => console.log(add(5)))();

// function expression
const substract = function (number) {
    console.log(number);
    return number;
}

substract(6);
(() => console.log(substract(6)))(); 

const substract2 = function () {
    substract(2);
    console.log('expression');
}

substract2();