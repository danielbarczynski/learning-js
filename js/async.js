'use strict';

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        location === 'Google' ? resolve('Google accepts') : reject('Google rejects');
    });
}

function processRequest(response) {
    return new Promise((resolve) => {
        console.log('Processing response'); // called before then
        resolve(`Additional info: ${response}`) // called after then
    });
}

// Promise
makeRequest('Google').then(response => {
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(error => {
    console.log(error);
})

// Sync
function makeRequestSync() {
    const response = makeRequest('Google');
    const processedResponse = processRequest(response);
    console.log(processedResponse);
} // reutrns promise

makeRequestSync();

//* Async
async function makeRequestAsync() {
    try {
        const response = await makeRequest('Google'); // awaits for the function first
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (error) {
        console.log(error);
    }
} // returns result of a promise

makeRequestAsync();

//* IMPORTANT
fetch('https://reqres.in/api/users/')
    .then(res => res.json())
    .then(data => console.log(data)); // also working in the background asynchronously

// this is exactly the same as:
async function asyncFunc() {
    const res = await fetch('https://reqres.in/api/users/');
    const data = await res.json();
    console.log(data);
}

asyncFunc();