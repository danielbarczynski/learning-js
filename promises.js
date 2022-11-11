let x = prompt(`Enter number:`);
let y = prompt(`Enter second number:`);

x = parseInt(x);
y = parseInt(y);

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

