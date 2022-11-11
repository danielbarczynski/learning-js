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

