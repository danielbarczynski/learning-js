const people = [{
    name: 'Daniel',
    age: 23
},
{
    name: 'Andrew',
    age: 35
},
{
    name: 'Marry',
    age: 43
},
{
    name: 'Lily',
    age: 21
}];

// Filter 
//* returns an array of values
const filter = people.filter((x) => { // just filter array without changing it
    return x.age > 35;
});
const filter2 = people.filter(x => x.age > 40); // without () it also works

console.log(filter);
console.log(filter2);

// Map
const map = people.map((x) => x.name); // shows only specific key values
const map2 = people.map((x) => x.name + " " +x.age); // two values, not as an object
const map3 = people.map(x => x.age * 2); 
console.log(map);
console.log(map2);
console.log(map3);

// Find
//* returns an object
//* the difference between filter is that in filter, whole array is iterated despite the fact that the element being searched for is present at the beginning.
const find = people.find(x => x.name === 'Andrew'); // works like filter but returns only one record
const find2 = people.find(x => x.age > 20); // works first record satisfying the condition
console.log(find);
console.log(find2);

// Foreach
people.forEach((x) => console.log(x));

// Some
const some = people.some(x => x.age > 30); // if any item match the assumption, returns bool 
console.log(some);

// Every
const every = people.every(x => x.age > 10); // if every item match the assumption, returns bool 
console.log(every);

// Reduce
const reduce = people.reduce((x, y) => x + y.age, 0); // sum of list items + reducer x which starts at 0
console.log(reduce);

// Includes
const nums = [1, 2, 3, 4, 5];
const includes = nums.includes(3);

console.log(includes);