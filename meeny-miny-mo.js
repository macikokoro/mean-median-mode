//Put it all together

//Mean=============================
var numArray = [2, 4, 5, 6, 8, 10, 11];
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
//empty array to store results
var result = [];
//loop through array
for (var i = 0; i < numArray.length; i++) {
    //compare results
    if (numArray[i + 1] === numArray[i]) {
        //push duplicates
        result.push(numArray[i]);
    }
}
//function to eliminate duplicates
var unique = result.filter(function (elem, index, self) {
    return index == self.indexOf(elem);
});

if (result.length < 1) {
    console.log("no mode!");
} else {
    //log the repeating numbers in array
    console.log("*** The mode: " + unique);
}
