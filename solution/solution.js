(async function () {

    const fs = require('fs');
    const util = require('util');
    const appendFile = util.promisify(fs.appendFile);
    const req = util.promisify(require('request'));
    try{
        let res = await req('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}});
        
        await appendFile('jokes.txt', '\n'+JSON.parse(res.body).joke);
        console.log('Joke Saved!');    
    }catch(exception){
        console.log('Exception found:' , exception);
    }
    
})();
