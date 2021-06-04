//--VUE--//

const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app4 = express()
const users = require('./Users');

const router = express.Router()
//Users.insertSignList();
//users.selectSignList();

// serve static
app4.use(express.static('public'));
app4.set('view engine', 'ejs')
app4.use(bodyParser.json());
app4.use(bodyParser.urlencoded({ extended: true }));
app4.use(express.json()); //req.body

// GET method route
app4.get('/', (req, res) => {
    res.render('vueIndex');
});

app4.get('/vueRegis',(req,res) => {
    res.render("vueRegis");
});

//POST REQUEST//
app4.post('/vueRegis', async (req,res) =>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const birth = req.body.birth;
    const gender = req.body.gender;
    const username = req.body.username;
    const password = req.body.password;

    try {
        users.insertSignList(fname, lname, email, gender, username, password, birth);
        res.send('success!');
    } catch (error) {
        res.send(error);
    }
    //return res.json({});

});

//router.post('/Users', controller.users.insertSignList)

app4.listen(8000);