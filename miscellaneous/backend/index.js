let express = require('express');
let app = express();
let port = 8080;

// this line makes the response to extended to be read for eg in a post request
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, () => {
    console.log('listening on port ', port);
});

app.get('/register', (req, res) => {
    let { user, pass } = req.query;
    res.send(`welcome ${user}`);
});

app.post('/register', (req, res) => {
    let { user, pass } = req.body;
    res.send(`welcome ${user}`);
    console.log(req.body)
});
