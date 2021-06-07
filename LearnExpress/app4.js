//--VUE--//
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app4 = express()
const users = require('./Users');
const cors = require('cors')  //CORS

// serve static
app4.use(express.static('public'));
app4.set('view engine', 'ejs')
app4.use(bodyParser.json());
app4.use(bodyParser.urlencoded({ extended: true }));
app4.use(express.json()); //req.body
app4.use(cors())

// GET method route
app4.get('/', (req, res) => {
    res.render('vueIndex');
});

app4.get('/vueRegis',(req,res) => {
    res.render("vueRegis");
});

//POST REQUEST//
app4.post('/vueRegis',cors(), async (req,res) =>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const birthday = req.body.birthday;
    const gender = req.body.gender;
    const username = req.body.username;
    const password = req.body.password;

    // const result = users.insertSignList(fname, lname, email, gender, username, password, birthday);
    // res.send(result);

    try {
        await users.insertSignList(fname, lname, email, gender, username, password, birthday);
        res.status(200).send({ result: 'Successfully' });
      } catch (e) {
        // res.status(400).send({ result: 'Oops, please try again' });
        res.status(400).send({ result: e.message });
      }

    // if (result) {
    //     res.send(result);
    // } else {
    //     res.send('success!');
    // }
});

app4.listen(8000);