//Find the median
function getMedian(input) {
    var numArray = input.slice(2);
    console.log(numArray.length);
    console.log("Array out of order: " + numArray);
    numArray.sort(function (a, b) {
        return a - b;
    });
    console.log("Sorter array: " + numArray);
    var middle = Math.floor(numArray.length / 2);

    if (numArray.length % 2 === 0) {
        console.log((Number(numArray[middle - 1]) + Number(numArray[middle])) / 2);
    } else {
        console.log("median: " + Number(numArray[middle]));
    }
}

getMedian(process.argv);
