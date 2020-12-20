var fs = require('fs');
var lines = fs.readFileSync('./day6data.txt', 'utf-8').split('\n\n');

let task1_counter = task2_counter = 0;
let unique, common

lines.forEach((group) => {
    let rows = group.split('\n')
    unique = new Set();
    common = rows[0].split('')

    rows.map((row) => row.split('')).forEach((row) => {
        unique = new Set([...unique, ...new Set(row)]);
        common = common.filter(x => row.includes(x))
    });
    task1_counter = task1_counter + unique.size;
    task2_counter = task2_counter + common.length
});

console.log(task1_counter, task2_counter)
