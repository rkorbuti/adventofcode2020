var fs = require('fs');
var lines = fs.readFileSync('./day4/day4data.txt', 'utf-8').split('\n\n');

let task1_counter = task2_counter = 0;

lines.map((line) => convertToObject(line)).forEach(obj => {
  task1Match(obj) ? task1_counter++ : '';
  task2Match(obj) ? task2_counter++ : '';
})
console.log('task1: ' + task1_counter, 'task2: ' + task2_counter);

function task1Match(obj) {
  return obj.byr && obj.iyr && obj.eyr && obj.hcl && obj.hgt && obj.ecl && obj.pid
}

function task2Match(obj) {
  return 1920 <= obj.byr && obj.byr <= 2002
      && 2010 <= obj.iyr && obj.iyr <= 2020
      && 2020 <= obj.eyr && obj.eyr <= 2030
      && obj.hcl && /^#[0-9a-f]{3,6}$/i.test(obj.hcl)
      && isHeightValid(obj.hgt)
      && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(obj.ecl)
      && /^\d{9}$/.test(obj.pid);
}

function isHeightValid(height) {
  return !!((height && height.includes('cm') && 150 <= height.split('cm')[0] && height.split('cm')[0] <= 193) ||
      (height && height.includes('in') && 59 <= height.split('in')[0] && height.split('in')[0] <= 76));
}

function convertToObject(string) {
  const result = {};
  string.split('eyr:')[1] ? (result.eyr = string.split('eyr:')[1].split(/[\s,\n]/)[0]) : '';
  string.split('byr:')[1] ? (result.byr = string.split('byr:')[1].split(/[\s,\n]/)[0]) : '';
  string.split('hcl:')[1] ? (result.hcl = string.split('hcl:')[1].split(/[\s,\n]/)[0]) : '';
  string.split('ecl:')[1] ? (result.ecl = string.split('ecl:')[1].split(/[\s,\n]/)[0]) : '';
  string.split('hgt:')[1] ? (result.hgt = string.split('hgt:')[1].split(/[\s,\n]/)[0]) : '';
  string.split('iyr:')[1] ? (result.iyr = string.split('iyr:')[1].split(/[\s,\n]/)[0]) : '';
  string.split('pid:')[1] ? (result.pid = string.split('pid:')[1].split(/[\s,\n]/)[0]) : '';
  return result;
}