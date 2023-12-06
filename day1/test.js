const fs = require('fs');
const readline = require('readline');
const fileStream = fs.createReadStream('./input.txt');

const wordsToNums = new Map([
  ["zero", 0],
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

function parseNums(str) {
  for (const num of wordsToNums.keys()) {
    str = str.replaceAll(num, `${num}${wordsToNums.get(num)}${num}`);
  }
  return str;
}


const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let nums = [];
let num;

rl.on('line', (line) => {
  line = parseNums(line);
  num = line.split('')
    .filter((c) => /\d/.test(c));

  num = num.at(0) + num.at(num.length-1);
  console.log(num);
  nums.push(parseInt(num));
});

rl.on('close', () => {
  console.log(nums.reduce((acc, item) => acc + item));
});



