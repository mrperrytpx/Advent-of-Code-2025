const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n\n")
    .map((x) => x.split("\n"));

let ranges = file[0];
let check = file[1];
let cnt = 0;

for (let c of check) {
    let spoiled = true;
    c = +c;
    for (let range of ranges) {
        const [l, r] = range.split("-").map(Number);

        if (c >= l && c <= r) {
            spoiled = false;
        }
    }

    if (!spoiled) cnt++;
}

console.log(cnt);
