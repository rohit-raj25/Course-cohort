const fs=require('fs');
const content = 'You can use the fs library to as a black box, the goal is to understand async tasks.'
fs.writeFile('1-counter.md', content, (err) => {
if (err) throw err;
console.log('Content has been written to the file.');
});
