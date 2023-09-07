const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacciSequence(count) {
  const output = [];
  if (count == 1) {
    output.push(0);
    console.log(output);
  } else if (count == 2) {
    output.push(0, 1); 
    console.log(output);
  } else if (count >= 3) {
    output.push(0, 1); ////initializes array if count is more than 2
    for (let arrayElements = 2; arrayElements < count; arrayElements++) { // loop to add summation of last and second last elements to the array until elements = count
      const nthElement = output[output.length - 1] + output[output.length - 2];
      output.push(nthElement);
    }
    console.log(output);
  } else {
    console.log("Invalid input. Please enter a positive integer.");
  }

  rl.close(); // Close the readline interface
}

rl.question('Enter a number: ', (input) => {
  const count = parseInt(input);

  if (!isNaN(count) && count > 0) {
    fibonacciSequence(count);
  } else {
    console.log("Invalid input. Please enter a positive integer.");
    rl.close();
  }
});
