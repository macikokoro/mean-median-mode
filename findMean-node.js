//Find mean
function getArray(input) {
    var numArray = input.slice(2);
    console.log("Array: " + numArray);
    var mean = 0;

    for (var i = 0; i < numArray.length; i++) {
        mean += Number(numArray[i]);

    }
    return mean / numArray.length;
}

console.log("The mean is: " + getArray(process.argv));
