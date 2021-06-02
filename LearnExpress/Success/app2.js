const express = require('express')
const bodyParser = require('body-parser')
const app2 = express()


// body parser
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

// serve static
app2.use('/static', express.static('public'));

// GET method route
app2.get('',function (req, res){
    res.sendFile(__dirname+"/index2.html")
})

//POST method
app2.post('/', function (req, res) {
    let inputArray = req.body.array;
    let inputDirection = req.body.direction;
    let inputStep = Number(req.body.step);
    let tmp;

    // // Convert string to array
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


    res.send('Result of shift array is : '+convertArray)
});

app2.listen(8000)