const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route
app.get('/',function (req, res){
    res.send('Hello Express')
})
app.get('/ahoy', (req, res) => {
    res.send('Ahoy!')
})

// POST method route
app.post('/api/concat', function (req, res) {
    let result = req.body.txt1 + req.body.txt2;
    res.send(result)
});

// GET method route
app.get('/api/concat', function (req, res) {
    let result = req.query.txt1 + req.query.txt2;
    res.send(result)
});

// GET (PARAMS) method route
app.get('/api/concat/:txt1/:txt2', function (req, res) {
    let result = req.params.txt1 + req.params.txt2;
    res.send(result)
});

// app.post('/api/v1/savedata')

app.listen(3000)