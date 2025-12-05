const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n\n")
    .map((x) => x.split("\n"));

let ranges = file[0];
let cnt = 0;

let x = [];
for (let range of ranges) {
    const [l, r] = range.split("-").map(Number);
    x.push([l, r + 1]);
}

x.sort((a, b) => a[0] - b[0]);

let max = 0;
let min = 0;
for (let pair of x) {
    const [l, r] = pair;

    if (l > max) {
        cnt += max - min;
        min = l;
        max = r;
    } else {
        if (r > max) max = r;
    }
}
cnt += max - min;

console.log(cnt);
