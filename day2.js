var fs = require('fs');
var lines = fs.readFileSync('./data/day2data.txt', 'utf-8').split('\n');

let task1_counter = (task2_counter = 0);
let min, max, letter, password;

lines.forEach((line) => {
  min = line.split('-')[0];
  max = line.split('-')[1].split(' ')[0];
  letter = line.split(' ')[1].split(':')[0];
  password = line.split(' ')[2];

  countCharacters(letter, password) >= min && countCharacters(letter, password) <= max ? task1_counter++ : '';
  xor(password.charAt(min - 1) === letter, password.charAt(max - 1) === letter) ? task2_counter++ : '';
});

console.log(task1_counter, task2_counter);

function countCharacters(char, string) {
  return string.split('').reduce((acc, ch) => (ch === char ? acc + 1 : acc), 0);
}

function xor(a, b) {
  return (a || b) && !(a && b);
}
