const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route
app.get('/',function (req, res){
    res.send('Hello Express')
})

//POST method
app.post('/api/shift', function (req, res) {
    let inputArray = req.body.array;
    let inputDirection = req.body.direction;
    let inputStep = req.body.step;
    let tmp;

    // Convert string to array
    const convertArray = inputArray.split(',')
    
    if (inputDirection === 'left') {
        for (let i=0;i<inputStep;i++) {
            tmp = convertArray.shift();
            convertArray.push(tmp);
        }
    } else if (inputDirection === 'right') {
        for (let i=0;i<inputStep;i++) {
            tmp = convertArray.pop();
            convertArray.unshift(tmp);
        }
    }
    // console.log(inputArray);

    //let result = req.body.inputArray + req.body.inputDirection + req.body.inputStep;
    res.send(convertArray)
});

app.listen(3000)