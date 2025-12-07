const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

const SPACE = ".";
const START = "S";
let start = { [file[0].indexOf(START)]: 1 };

for (let i = 0; i < file.length; i++) {
    const next = {};
    for (let key in start) {
        key = +key;
        if (file[i].charAt(key) === SPACE) {
            next[key] = (next[key] ?? 0) + start[key];
        } else {
            next[key - 1] = (next[key - 1] ?? 0) + start[key];
            next[key + 1] = (next[key + 1] ?? 0) + start[key];
        }
    }
    start = next;
}

let sum = 0;
for (let key in start) {
    sum += start[key];
}

console.log(sum);
