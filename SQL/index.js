const {faker} = require('@faker-js/faker');
const express = require('express');
const app = express();
const {v4: uuidv4} = require('uuid');
const path = require('path');
const mysql = require('mysql2');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

let tableName = 'user';

// generates random user
getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    ];
};

// to establish connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'anish@123'
  });

//   let q = 'INSERT INTO user (id, username, email, password) VALUES ?';

//   let users = [];

//   for(let i = 0; i < 100; i++) {
//     users.push(getRandomUser());
//   };

//   try {
//     connection.query(q, [users], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
//   } catch(err) {
//     console.log(err);
//   }

//   to end connection
//   connection.end();

  

app.listen(8080, () => {
    console.log('listening at 8080');
})

// home route
app.get('/', (req, res) => {
    try {
        connection.query(`SELECT COUNT(id) FROM ${tableName}`, (err, result) => {
            if(err) throw err;
            count = result[0]['COUNT(id)'];
            res.render('home.ejs', {count});
        });
      } catch(err) {
        console.log(err);
        res.send('error with db')
      }
})

// show route /user
app.get('/user', (req, res) => {
    try {
        let q = `SELECT * FROM ${tableName}`;
        connection.query(q, (err, result) => {
            if(err) throw err;
            res.render('show.ejs', {result});
        });
      } catch(err) {
        console.log(err);
        res.send('error with db')
      };
});

// edit route
app.get('/user/:id/edit', (req, res) => {
    try {
        let q = `SELECT * FROM ${tableName} WHERE id='${req.params.id}'`;
        connection.query(q, (err, result) => {
            if(err) throw err;
            result = result[0];
            res.render('edit.ejs', {result});
        });
      } catch(err) {
        console.log(err);
        res.send('error with db')
      };
});

// update route
app.patch('/user/:id/edit', (req, res) => {
    try {
        let select = `SELECT * FROM ${tableName} WHERE id='${req.params.id}'`;
        connection.query(select, (err, result) => {
            if(err) throw err;
            result = result[0];
            if(result.password != req.body.password) {
                res.send('incorrect password');
            } else {
                let q = `UPDATE user SET username='${req.body.username}', email='${req.body.email}' WHERE id='${req.params.id}'`;
                connection.query(q, (err, result) => {
                console.log(result);
                res.redirect('/user');
                })
            }
        });
    } catch(err) {
        console.log(err);
        res.send('error with db');
    }
});

// add route
app.get('/user/add', (req, res) => {
    res.render('add.ejs');
})

app.post('/user/add', (req, res) => {
    try {
        connection.query(`INSERT INTO ${tableName} VALUES ('${uuidv4()}', '${req.body.username}', '${req.body.email}', '${req.body.password}')`, (err, result) => {
            console.log(result);
            if(err) throw err;
        });
        res.redirect('/user');
    } catch(err) {
        console.log(err);
        res.send('err with db');
    }
})

// delete route
app.get('/user/delete', (req, res) => {
    res.render('delete.ejs');
})

app.delete('/user/delete', (req, res) => {
    try {
        connection.query(`DELETE FROM ${tableName} WHERE username='${req.body.username}' AND password='${req.body.password}'`, (err, result) => {
            console.log(result);
            if(err) throw err;
            if(result.affectedRows == 0) {
                res.send('wrong credentials');
            } else {
                res.redirect('/user');
            }
        });
    } catch(err) {
        console.log(err);
        res.send('err with db');
    }
})