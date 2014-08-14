//Find mean
function getMean(input) {
    var numArray = input.slice(2);
    console.log("- Array: " + numArray.sort());
    var mean = 0;

    for (var i = 0; i < numArray.length; i++) {
        mean += Number(numArray[i]);

    }
    return mean / numArray.length;
}

console.log("- Mean: " + getMean(process.argv));

//Find the median
function getMedian(input) {
    var numArray = input.slice(2);
    numArray.sort(function (a, b) {
        return a - b;
    });

    var middle = Math.floor(numArray.length / 2);

    if (numArray.length % 2 === 0) {
        console.log("- Median: " + (Number(numArray[middle - 1]) + Number(numArray[middle])) / 2);
    } else {
        console.log("- Median: " + Number(numArray[middle]));
    }
}

getMedian(process.argv);

//Find the mode
function getMode(input) {
    var numArray = input.slice(2);

    numArray.sort(function (a, b) {
        return a - b;
    });

    var result = [];

    for (var i = 0; i < numArray.length; i++) {

        if (numArray[i + 1] === numArray[i]) {

            result.push(numArray[i]);
        }
    }

    var unique = result.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    });

    if (result.length < 1) {
        console.log("- Mode: " + numArray);
    } else {
        console.log("- Mode: " + unique);
    }
}
getMode(process.argv);
