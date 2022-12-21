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
const filter = people.filter((x) => {
    return x.age > 30;
});
const filter2 = people.filter(x => x.age > 40); // without () it also works

console.log(filter);
console.log(filter2);

// Map
const map = people.map((x) => x.name); // shows only specific key values
console.log(map);

// Find
const find = people.find((x) => x.name === 'Andrew'); 
console.log(find);

// Foreach
people.forEach((x) => console.log(x));

// Some
const some = people.some((x) => x.age > 30); // if any item match the assumption, returns bool 
console.log(some);

// Every
const every = people.every((x) => x.age > 10); // if every item match the assumption, returns bool 
console.log(every);

// Reduce
const reduce = people.reduce((x, y) => x + y.age, 0); // sum of list items + reducer (x) which starts at 0
console.log(reduce);

// Includes
const nums = [1, 2, 3, 4, 5];
const includes = nums.includes(3);

console.log(includes);