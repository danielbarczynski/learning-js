const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};
const objects = [{ name: 'daniel', age: 23},{ name: 'zuza', age: 19}, { name: 'klaudia', age: 24}];
const obj4 = {...objects}
const obj5 = objects.map((x) => x.age > 20); // returns bool
const obj6 = objects.find((x) => x.age > 20); // returns object
obj6.age = 33; // changes age
const obj7 = {...obj6};

//* returns whole array with changed property
const obj8 = objects.map((x) => x.name === 'zuza' ? {...x, name: 'hey', age: 50 } : x); 

console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);
console.log(obj7);
console.log(obj8);