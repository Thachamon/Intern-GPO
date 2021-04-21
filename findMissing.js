function findMissing (inputArray){
    var lengthArr = inputArray.length;
    //diff is first number in array
    var diff = inputArray[0] - 0;

    for(let i = 0; i < lengthArr; i++){
        if(inputArray[i] - i != diff){
            while(diff < inputArray[i]-i){
                //return i+diff;
                MissingNumb.push(i+diff);
                diff++;
            }
        } 
    } 
}

var inputArray = [1, 2, 5, 9, 11];
var MissingNumb = [];

findMissing(inputArray);
console.log(MissingNumb);