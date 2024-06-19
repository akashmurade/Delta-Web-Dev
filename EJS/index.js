// EJS (Embedded JavaScript Templates)
// templating language that can generate HTML markup with plain JS

let express = require('express');
// EJS is internally require()d by express so no need to require() it
let path = require('path');
// for getting the __dirname

let app = express();
let port = 8080;

app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, '/views'));

app.listen(port, () => {
    console.log('listening on port', port);
});

// express searches for ejs templates by default in 'views' folder
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/rolldice', (req, res) => {
    let ranVal = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice', { ranVal });
});

app.get('/ig/:username', (req, res) => {
    const instaData = require('./data.json')
    let { username } = req.params;
    let data = instaData[username];
    if(data) {
        res.render('instagram.ejs', data);
    } else {
        res.send('No Info')
    }
})