const express = require('express');
const app = express();

// if we have package.json we can run npm install to get all the node_modules files back
// therefore no need to upload it to github

let port = 3000;

// listen method takes a port number and calls the callback
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// use method automatically makes req and res object and passes as arguments to callback
// app.use((req, res) => {
//     console.log('request received')
//     // sending response
//     res.send('<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>')
// })

// for routing

app.get('/show', (req, res) => {
    res.send('on show')
})

app.post('*', (req, res) => {
    res.send('edited post request')
})

// app.get('*', (req, res) => {
//     res.send('Any route')
// })

// nodemon allows automatic restart of server when the code is updated

// path parameters are variable values that can be sent in the path

// here after the first forward slash takes any value as a parameter for username and can be accessed through the req.params object with key specifying the parameter username
app.get('/:username/:id', (req, res) => {
    let {username, id} = req.params;
    res.send(`welcome to the page of @${username} with id @${id}`);
});

// query string: provides info that can be used as a argument to give specified output
// send q as query with value as numbers separated by '+' in the path
// eg http://localhost:3000/search?q=1+2+3 here the output should be 6
app.get('/search', (req, res) => {
    if(!req.query.q) {
        res.send('nothing searched');
        return;
    }
    let arr = req.query.q.split(' ');
    sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    res.send(`summed value from query is: ${sum}`)
})