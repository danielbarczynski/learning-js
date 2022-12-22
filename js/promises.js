// let x = prompt(`Enter number:`);
// let y = prompt(`Enter second number:`);

// x = parseInt(x);
// y = parseInt(y);
let x = 5;
let y = 4;

let promise = new Promise((resolve, reject) => {
    console.log(x + y);
    if (x + y > 10)
        resolve('SUCCESS');
    else
        reject('FAIL');
})

promise.then((message) => {
    console.log(message);
}).catch((message) => console.log(message));

//------------------------------------------

let isHappy = true;
let myPromise = (myMood) => {
    return new Promise((resolve, reject) => {
        if (myMood === isHappy){
            resolve('is happy');
        }
        else
            reject('is not happy');
    })
}

myPromise(false).then((message) => console.log(message))
    .catch((message) => console.log(message));
//------------------------------------------

const done1 = new Promise((resolve) => {
    resolve('done1');
})

const done2 = new Promise((resolve) => {
    resolve('done2');
})

const done3 = new Promise((resolve) => {
    resolve('done3');
})

Promise.all([done1, done2, done3]) 
// .catch((messages) => console.log(messages)); // wont work
.then((messages) => console.log(messages));

