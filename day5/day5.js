var fs = require('fs');
var lines = fs.readFileSync('./day5/day5data.txt', 'utf-8').split('\n');

const seats = lines.map((line) => parseInt(line.replace(/[FL]/g, 0).replace(/[BR]/g, 1), 2));

console.log('task1: ' + seats.sort((a, b) => b - a)[0]);

let seats_near = [];
for (let i = 1; i < seats.length - 1; i++) {
  seats[i] !== seats[i - 1] - 1 || seats[i] !== seats[i + 1] + 1 ? seats_near.push(seats[i]) : '';
}

console.log('task2: ' + seats_near.reduce((a, b) => a + b) / 2);