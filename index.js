function fibonacciSequence() {
    var output = [];
    var count = parseInt(prompt("Enter a number: "));
    if (count == 1) {
        output.push(0);
        console.log(output);
    } else if (count == 2) {
        output.push (0,1);
    } else if (count == output.length) {
        console.log(output);
    } else if (count >= 3) {
        output.push (0,1);
        for (var arrayElements = 2; arrayElements < count; arrayElements++) {
            var nthElement = output[(output.length - 1)] + output[(output.length - 2)];
            output.push(nthElement);
        }
        console.log(output);
    }
}

fibonacciSequence();
