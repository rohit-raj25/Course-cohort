const fs = require('fs');

// Read file
fs.readFile('1-counter.md', 'utf8', (err, data) => {
if (err) throw err;
console.log(data);

// Perform an expensive operation
for (let i = 0; i < 10000000000; i++) {
// This loop simulates an expensive operation
}
console.log('Expensive operation completed.');
});
