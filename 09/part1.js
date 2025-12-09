const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let max = 0;
for (let i = 0; i < file.length; i++) {
    const [ay, ax] = file[i].split(",").map(Number);
    for (let j = i + 1; j < file.length; j++) {
        const [by, bx] = file[j].split(",").map(Number);

        const h = Math.abs(bx - ax) + 1;
        const w = Math.abs(by - ay) + 1;

        const area = h * w;
        if (area > max) max = area;
    }
}

console.log(max);
