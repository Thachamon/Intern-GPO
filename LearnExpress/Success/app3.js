const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app3 = express()
const users = require('../Users');


//Users.insertSignList();
//users.selectSignList();

// serve static
app3.use(express.static('public'));
app3.set('view engine', 'ejs')
app3.use(bodyParser.json());
app3.use(bodyParser.urlencoded({ extended: true }));
app3.use(express.json()); //req.body

// GET method route
app3.get('/', (req, res) => {
    res.render('index');
});

app3.get('/register',(req,res) => {
    res.render("register");
});

//POST REQUEST//
app3.post('/register', async (req,res) =>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const birth = req.body.birth;
    const gender = req.body.gender;
    const username = req.body.username;
    const password = req.body.password;

    users.insertSignList(fname, lname, email, gender, username, password, birth);

    res.send('successful!!');
    //return res.json({});

});

app3.listen(8000);