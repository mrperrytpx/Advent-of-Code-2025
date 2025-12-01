const readFile = require("fs").readFileSync;
let file = readFile(__dirname + "/input.txt", "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let cnt = 0;
let start = 50;

for (let row of file) {
    const dir = row.charAt(0);
    const num = +row.slice(1);

    switch (dir) {
        case "R": {
            start += num;
            if (start >= 100) {
                start %= 100;
            }
            break;
        }

        case "L": {
            start -= num;
            if (start < 0) {
                start = ((start % 100) + 100) % 100;
            }
            break;
        }
    }

    if (start === 0) cnt++;
}

console.log(cnt);
