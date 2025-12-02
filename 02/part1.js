const readFile = require("fs").readFileSync;
let file = readFile(__dirname + "/input.txt", "utf-8")
    .replace(/\r/g, "")
    .split(",");

let cnt = 0;

for (let pair of file) {
    const [first, last] = pair.split("-");

    for (let i = +first; i <= +last; i++) {
        let check = i.toString();

        const a = check.slice(0, Math.floor(check.length / 2));
        const b = check.slice(Math.floor(check.length / 2));

        if (a === b) cnt += i;
    }
}

console.log(cnt);
