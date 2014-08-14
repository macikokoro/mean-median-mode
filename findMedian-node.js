//Find the median
function getArray(input) {
var numArray = input.slice(2);

numArray.sort(function(a, b) {return a-b;});

console.log(numArray);

console.log("array length is: " + numArray.length);

//var middle = Math.floor(numArray.length / 2);

//--------------------------
function findMedian () {
  if(numArray.length % 2 === 0) {
    var lowerMiddleIndex = Math.floor((numArray.length - 1) / 2);
    var higherMiddleIndex = Math.ceil((numArray.length - 1) / 2);
// console.log(numArray[lowerMiddle] + ' ' + numArray[higherMiddle]);

// console.log((Number(numArray[lowerMiddle]) + Number(numArray[higherMiddle])) /2);
    var lowerMiddleValue = numArray[lowerMiddleIndex];
    var higherMiddleValue = numArray[higherMiddleIndex];
    console.log(typeof lowerMiddleValue);
    lowerMiddleValue = Number(lowerMiddleValue);
    higherMiddleValue = Number(higherMiddleValue);

    console.log(typeof lowerMiddleValue);
    var total = lowerMiddleValue + higherMiddleValue;
    console.log('Type of total: ' + typeof total);
    var middle = total / 2;
    console.log(middle);

    //console.log("middle nums when array length is even: " + numArray[middle - 1] + " " + numArray[middle]);

    //console.log("the median is: " + (numArray[middle - 1] + numArray[middle])/2);
  } else {
    //console.log("middle num when array length is odd: " + numArray[middle]);
  }
}

findMedian();


}

getArray(process.argv);
