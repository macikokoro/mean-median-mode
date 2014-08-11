//Find the mode

var numArray = [2, 3, 6, 4, 8, 10, 11, 13, 1, 2, 2, 3,3,3,3];
//sort numbers in order
numArray.sort(function(a, b) {return a-b;});
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
//log the contents of the array
console.log(numArray);
//log the repeating numbers in array
console.log("these numbers repeat: " + result);
//made possible by http://dreaminginjavascript.wordpress.com/
function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}


var b=[];


b=eliminateDuplicates(result);
console.log(result);
console.log("array without duplicates " + b);
