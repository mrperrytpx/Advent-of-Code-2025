const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let map = {};
let idx = 0;
for (let i = file[0].length - 1; i >= 0; i--) {
    let num = "";
    for (let j = 0; j < file.length - 1; j++) {
        num += file[j][i];
    }

    if (!+num) {
        idx++;
        continue;
    }

    map[idx] ? map[idx].push(num) : (map[idx] = [num]);
}

const ops = file[file.length - 1].trim().split(/\s+/).reverse();

let sum = 0;
for (let nums in map) {
    let t = 0;
    for (let x of map[nums]) {
        if (ops[nums] === "*") {
            if (t === 0) t = 1;
            t *= +x;
        } else {
            t += +x;
        }
    }

    sum += t;
}

console.log(sum);
