const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let sum = 0;
const SIZE = 12;

for (let bank of file) {
    let left = 0;
    let right = bank.length - SIZE;
    let joltage = 0;
    let found = 0;

    while (found < SIZE) {
        let curr = bank
            .slice(left, right + 1)
            .split("")
            .map(Number);

        let m = Math.max(...curr);

        joltage = joltage * 10 + m;
        found++;
        left += curr.indexOf(m) + 1;
        right++;
    }

    sum += joltage;
}

console.log(sum);
