const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let sum = 0;

for (let bank of file) {
    let max = 0;

    for (let i = 0; i < bank.length - 1; i++) {
        for (let j = i + 1; j < bank.length; j++) {
            const check = Number(bank[i] + bank[j]);
            if (check > max) {
                max = check;
            }
        }
    }

    sum += max;
}

console.log(sum);
