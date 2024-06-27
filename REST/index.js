const express = require('express');
const path = require('path');
const {v4: uuidv4} = require('uuid');
const methodOverride = require('method-override');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log('listening on port', port);
});

class Post {
    constructor(username, content) {
        this.id = uuidv4();
        this.username = username;
        this.content = content;
    };
};

let posts =[
    new Post('codelover', 'loves coding'),
    new Post('shraddha', 'loves teaching'),
    new Post('akash', 'loves learning')
];

// Index route
app.get('/posts', (req, res) => {
    res.render('index.ejs', {posts});
});

// New post create route
app.get('/posts/new', (req, res) => {
    res.render('postform.ejs');
});

// redirects to /posts after dealing with the post request
app.post('/posts', (req, res) => {
    posts.push(new Post(req.body.username, req.body.content));
    res.redirect('/posts');
});

// in detail info of post
app.get('/posts/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find((obj) => obj.id === id);
    res.render('showid.ejs', {post});
})

// update route
app.get('/posts/:id/edit', (req, res) => {
    const {id} = req.params;
    const post = posts.find((obj) => obj.id === id);
    res.render('edit.ejs', {post});
})

app.post('/posts/:id/edit')

app.patch('/posts/:id/edit', (req, res) => {
    const {id} = req.params;
    const {content} = req.body;
    const post = posts.find((obj) => obj.id === id);
    post.content = content;
    res.redirect('/posts');
})

// Destroy route
app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find((obj) => obj.id === id);
    posts.splice(posts.indexOf(post), 1);
    res.redirect('/posts');
})