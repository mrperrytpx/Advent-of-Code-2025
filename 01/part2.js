const readFile = require("fs").readFileSync;
let file = readFile(__dirname + "/input.txt", "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let cnt = 0;
let start = 50;

for (let row of file) {
    const dir = row.charAt(0);
    const num = dir === "R" ? +row.slice(1) : -+row.slice(1);

    let newPos = start + num;

    if (newPos >= 100) {
        if (start === 0) cnt--;
        cnt += Math.floor(newPos / 100);
        newPos = newPos % 100;
    } else if (newPos < 0) {
        cnt += Math.floor(-newPos / 100) + 1;
        newPos = ((newPos % 100) + 100) % 100;
    }

    start = newPos;
}

console.log(cnt);
