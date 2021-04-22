/**
 * shift array to specific direction
 * @param {*} inputArray 
 * @param {*} inputDirection 
 * @param {*} inputStep 
 */

function shift(inputArray , inputDirection, inputStep) {
    let tmp;

    if (inputDirection === 'left') {
        for (let i=0;i<inputStep;i++) {
            tmp = inputArray.shift();
            inputArray.push(tmp);
        }
    } else if (inputDirection === 'right') {
        for (let i=0;i<inputStep;i++) {
            tmp = inputArray.pop();
            inputArray.unshift(tmp);
        }
    }

    console.log(inputArray);
}

const argvInput = process.argv.slice(2);

const argvArray = argvInput[0];
const argvDirection = argvInput[1];
const argvStep = argvInput[2];

// Validate input
function check_argvArray(argvArray){
    return /[!@#$%^&*_+:;"'<>?-]/.test(argvArray);
}
    if (check_argvArray(argvArray) === true){
        console.log("Error!! Input Array is not true");
    }
    else{

    }

//check direction
if (argvDirection !== 'right' && argvDirection !== 'left'){
    console.log("Error!! Direction must be 'left' or 'right'");
}

//check step
if(!argvStep.match(/^([0-9])+$/i)){
    console.log("Error!! Step must be a number!");
}

// Convert string to array
const convertArray = argvArray.split(',')

shift(convertArray, argvDirection, argvStep);