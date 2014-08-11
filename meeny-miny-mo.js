
//Put it all together

//Mean=============================
var numArray = [2, 4, 4, 5, 5, 6, 8, 10, 11];
console.log("The array is: " + numArray);
var mean = 0;

for (var i = 0; i < numArray.length; i++) {
    mean += numArray[i];
}

//logs the result mean of the array
console.log("**** The mean is: " + mean / numArray.length);

//Median================================
numArray.sort(function (a, b) {
    return a - b;
});
//Split the array in half
var middle = Math.floor(numArray.length / 2);
//function to find the median
function findMedian() {
    if (numArray.length % 2 === 0) {
        //log the two middle numbers if array length is even
        console.log("median when array length is even: " + numArray[middle - 1] + " " + numArray[middle]);
        //log the result after dividing the two middle numbers
        console.log("**** The median is: " + (numArray[middle - 1] + numArray[middle]) / 2);
    } else {
        console.log("**** The median is: " + numArray[middle]);
    }
}
//call function
findMedian();

//Mode ===================================
var result = [];
//loop through array
for (var i = 0; i < numArray.length; i++) {
    //compare results
    if (numArray[i + 1] === numArray[i]) {
        //push duplicates
        result.push(numArray[i]);
    }
}

//made possible by http://dreaminginjavascript.wordpress.com/
function eliminateDuplicates(arr) {
    var i,
    len = arr.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}

var b = [];

b = eliminateDuplicates(result);

console.log("**** The mode is: " + b);
