// Callback is a function that you pass as parameter to another function
// For example: setTimetout(() => (), 1000)
// A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future.

function logSum(result) {
    console.log(result)
}

function sum(x, y, cb) {
    let result = x + y;
    cb(result);
}

sum(5, 6, logSum);
sum(5, 6, x => console.log(5 + 6));

// --------------------------------------------

let isHappy = false;
let myCallback = (callback, errorCallback) => {
    if (isHappy)
        callback('is happy');
    else
        errorCallback('is not happy');
};
myCallback((message) => {
    console.log(message);
}, message => { // doesn't have to be in ()
    console.log(message);
});
let myCb = (addNum) => {
    addNum(5);
};
myCb(x => console.log(x + x));


const people = ['John', 'Marry', 'Jake', 'Paul', 'Andrew', 'Tate'];
const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        callback(element);
    }
};
console.log(people);
myForEach(people, (element) => {
    console.log(element);
});

let pokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => cb(data));
};
pokemon(5, (x) => console.log(x.stats));