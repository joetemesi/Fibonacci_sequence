function fibonacciSequence() {
    var output = [];
    var count = parseInt(prompt("Enter a number: "));
    if (count == 1) {
        output.push(0);
        console.log(output);
    } else if (count == 2) {
        output.push (0,1);
        console.log(output);
    } else if (count == output.length) {
        console.log(output);
    } else if (count >= 3) {
        output.push (0,1); //initializes array if count is more than 2
        for (var arrayElements = 2; arrayElements < count; arrayElements++) { 
            var nthElement = output[(output.length - 1)] + output[(output.length - 2)]; 
            output.push(nthElement); // loop to add summation of last and second last elements to the array until elements = count
        }
        console.log(output);
    }
}

fibonacciSequence();
