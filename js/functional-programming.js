let a = 456;

function add() {
  a = a + 100;
  return a;
}

//functional programming

function addScore(score) {
  return score + 100; //functions and data are separate
}

console.log(addScore(50));
console.log(add());

// state change

let b = "hi";
b = "hi there ";
b = "hi there yo";

// functional programming

let c = "hi";
let cMonday = "hi there";
let cSaturday = "hi there yo";

//functional programming
// functions are treated like a first class

const ppl = function () {
  // declaring function as variable
  return 5;
};

sayhello(function () {}); // using function inside function
{
  return function () {}; // returning function
}
