'use strict';

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        location === 'Google' ? resolve('Google accepts') : reject('Google rejects');
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
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
}

makeRequestSync();

// Async

async function makeRequestAsync() {
    const response = await makeRequest('Google');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
}

makeRequestAsync();