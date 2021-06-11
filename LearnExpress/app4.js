//--VUE--//
const express = require('express');
const app4 = express();
const users = require('./Users');
const cors = require('cors'); //CORS
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const urlencodedPaser = bodyParser.urlencoded({ extended: false });
var session = require('express-session');
const { Connection } = require('pg');
const { response } = require('express');

// serve static
app4.use(express.static('public'));
app4.use(express.json());
app4.use(cors());
app4.use(bodyParser.json());
app4.use(bodyParser.urlencoded({ extended: true }));
app4.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);

// GET method route
app4.get('/', (req, res) => {
    res.render('vueIndex');
});

app4.get('/vueRegis', (req, res) => {
    res.render('vueRegis');
});

//POST REQUEST//
app4.post(
    '/vueRegis',
    cors(),
    urlencodedPaser,
    [
        check('fname', 'Firstname should not be empty').notEmpty(),
        check('fname', 'Firstname should be string').isString(),
        check('fname', 'Firstname must be 3 characters').isLength({ min: 3 }),

        check('lname', 'Lastname should not be empty').notEmpty(),
        check('lname', 'Lastname should be string').isString(),
        check('lname', 'Lastname must be 3 characters').isLength({ min: 3 }),

        check('email', 'Email should not be empty').notEmpty(),
        check('email', 'Email should be Email').isEmail().normalizeEmail(),

        check('birthday', 'Birthday should be date').isISO8601().toDate(),

        check('gender', 'Gender should not be empty').notEmpty(),
        check('gender', 'Gender should be string').isString(),

        check('password', 'Password must be 8 characters').isLength({ min: 8 }),
    ],
    async (req, res) => {
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const birthday = req.body.birthday;
        const gender = req.body.gender;
        const username = req.body.username;
        const password = req.body.password;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            res.status(422).send({ errors: errors.array() });
        } else {
            try {
                await users.insertSignList(fname, lname, email, gender, username, password, birthday);
                res.status(200).send({ result: 'Successfully' });
            } catch (e) {
                res.status(400).send({ result: e.message });
            }
        }
    }
);

app4.get('/viewRegister', cors(), (req, res) => {
    users.selectList(function (result) {
        res.send(result);
    });
    //console.log(users.selectList());
    // res.send(users.selectList());
});

app4.post('/login', cors(), (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        users.userLogin(username, password, function (results) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.status(200).send({ result: 'success' });
                //res.send('success');
                // res.redirect('/home');
            } else {
                res.status(400).send({ result: 'Incorrect Username and/or Password!' });
                //res.send('Incorrect Username and/or Password!');
            }
        });
    } else {
        res.send('Please enter Username and Password!');
    }
});

app4.get('/home', function (req, res) {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('Please login to view this page!');
    }
});

app4.listen(8000);
