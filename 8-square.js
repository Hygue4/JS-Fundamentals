// Get the first argument and convert it to an integer
const size = parseInt(process.argv[2]);

// Check if size is not a number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Loop through rows
  for (let i = 0; i < size; i++) {
    // Print "X" repeated size times for each row
    console.log('X'.repeat(size));
  }
}
