#!/usr/bin/node

// Get first argument and convert to integer
const num = parseInt(process.argv[2]);

// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Print result
console.log(factorial(num));
