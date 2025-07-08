function printEvenNumbers(arr) {
    var foundEven = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
            foundEven = true;
        }
    }

    if (!foundEven) {
        console.log("No even number found");
    }
}

module.exports = printEvenNumbers;
