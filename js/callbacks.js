// Callback is a function that you pass as parameter to another function
// For example: setTimetout(() => (), 1000)
let isHappy = false;

let myCallback = (callback, errorCallback) => {
    if (isHappy) 
        callback('is happy')
    else
        errorCallback('is not happy')
}   

myCallback((message) => {
    console.log(message);
}, (message) => {
    console.log(message);
})

console.log();

const people = ['John', 'Marry', 'Jake', 'Paul', 'Andrew', 'Tate'];

const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];      
        callback(element);
    }
}

myForEach(people, (theName) => {
    console.log(theName);
})