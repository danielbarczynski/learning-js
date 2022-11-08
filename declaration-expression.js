//before init

console.log(add(4));
//console.log(substract(5)); returns error before init because it is treated like a variable

// function declaration, you cannot pass to another function

function add(number) {
  return number;
}

// function expression

const substract = function (number) {
  return number;
};
