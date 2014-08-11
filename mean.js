//Find mean
var numArray = [2, 4, 4, 6, 8, 10];
var mean = 0;

for (var i  = 0; i < numArray.length; i++) {
  mean += numArray[i];
}
//logs the length of the array
console.log(numArray.length);
//logs the result of adding the intengers in the array
console.log(mean);
//logs the result mean of the array
console.log(mean/numArray.length);
