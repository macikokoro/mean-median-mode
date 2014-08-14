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
        console.log("mode: " + numArray);
    } else {

        console.log("these numbers repeat: " + result);
        console.log("mode: " + unique);
    }
}
getMode(process.argv);
