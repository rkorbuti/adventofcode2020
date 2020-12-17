var fs = require('fs');
var lines = fs.readFileSync('./day3/day3data.txt', 'utf-8').split('\n');

console.log('task1: ', count_trees(3, 1));
console.log('task2: ', count_trees(1, 1) 
                     * count_trees(3, 1) 
                     * count_trees(5, 1) 
                     * count_trees(7, 1) 
                     * count_trees(1, 2)
);

function count_trees(right, down) {
  let x = (counter = 0);
  for (let i = 0; i < lines.length; i = i + down) {
    lines[i][x] === '#' ? counter++ : '';
    x = (x + right) % lines[i].length;
  }
  return counter;
}