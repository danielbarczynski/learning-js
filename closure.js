function init() {
  var name = "Mozilla"; // name jest zmienną lokalną utworzoną przez funkcję init
  function displayName() {
    // displayName() jest wewnętrzną funkcją, domknięciem, ma dostep do name variable
    alert(name); // używa zmiennej zdeklarowanej w funkcji nadrzędnej
  }
  displayName();
}
init();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

//add5 i add10 są domknięciami. Dzielą ten sam kod zawarty w funkcji makeAdder, ale przechowują różne leksykalne środowisko. 
//W leksykalnym środowisku add5, x wynosi 5, natomiast w leksykalnym środowisku add10, x jest równe 10.


// other example with html/css

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);