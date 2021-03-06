// Goal: Let's say you are working on a code that stores jokes (from icanhazdadjoke) API in a local file.
// The code does a request and then proceeds to store the joke in the file.
// This code is written with callbacks. Can you refactor the "request" and the "file.appendFile" from callbacks to Async / Await syntax?

// NOTE: This code includes an external Lib "Request", make sure you do "npm install" before running the code.
// HINT: you might use native node lib "util", promisify method to convert to async, await.

const request = require('request');
const fs = require('fs');

request('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}},(error, res)=>{
    if(error){
        throw error;
    }

    fs.appendFile('jokes.txt', '\n'+JSON.parse(res.body).joke, (err)=>{
        if(err){
            throw err;
        }
        console.log('Joke Saved!');
    })
})
