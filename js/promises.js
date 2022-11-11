// let x = prompt(`Enter number:`);
// let y = prompt(`Enter second number:`);

// x = parseInt(x);
// y = parseInt(y);
let x, y = 5;

let promise = new Promise((resolve, reject) => {
    console.log(x + y);
    if (x + y > 10)
        resolve('SUCCESS');
    else
        reject('FAIL')
})

promise.then((message) => {
    console.log(message)
}).catch((message) => console.log(message))

//------------------------------------------

let isHappy = true;

let myPromise = () => {
    return new Promise((resolve, reject) => {
        if (isHappy)
            resolve('is happy')
        else
            reject('is not happy')
    })
}

myPromise().then((message) => console.log(message))
    .catch((message) => console.log(message));

//------------------------------------------

const done1 = new Promise((resolve, reject) => {
    resolve('done1');
})

const done2 = new Promise((resolve, reject) => {
    resolve('done2');
})

const done3 = new Promise((resolve, reject) => {
    resolve('done3');
})

Promise.all([done1, done2, done3]) 
.then((messages) => console.log(messages));

