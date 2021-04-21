function findMissing (inputArray){
    //sort the array
    inputArray.sort(function(a, b){return a-b});

    var lengthArr = inputArray.length;
    var diff = inputArray[0] - 0;
    for(let i = 0; i < lengthArr; i++){
        if(inputArray[i] - i != diff){
            while(diff < inputArray[i]-i){
                MissingNumb.push(i+diff);
                diff++;
            }
        } 
    } 
    console.log(MissingNumb);
}

//Receive input from command line
const argvArray = process.argv[2];

// Validate input
function check_argvArray(argvArray){
    return /^[0-9,]$/.test(argvArray);
}
if (check_argvArray(argvArray) === true){
    console.log("Error!! Input Array is not true");
}

const convertArray = argvArray.split(',')
var MissingNumb = [];

findMissing(convertArray);
console.log(convertArray);  //show sorted array