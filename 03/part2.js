const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let sum = 0;
const JOLTAGE = 12;

for (let bank of file) {
    let left = 0;
    let right = bank.length - JOLTAGE;
    const seq = [];

    while (seq.length !== JOLTAGE) {
        let curr = bank
            .slice(left, right + 1)
            .split("")
            .map(Number);

        let m = Math.max(...curr);

        seq.push(m);

        left += curr.indexOf(m) + 1;
        right++;
    }

    sum += +seq.join("");
}

console.log(sum);
