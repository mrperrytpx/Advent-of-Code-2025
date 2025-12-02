const readFile = require("fs").readFileSync;
let file = readFile(__dirname + "/input.txt", "utf-8")
    .replace(/\r/g, "")
    .split(",");

let cnt = 0;

for (let pair of file) {
    const [first, last] = pair.split("-");

    for (let i = +first; i <= +last; i++) {
        let check = i.toString();

        for (let j = 1; j <= check.length / 2; j++) {
            let segments = [];
            let k = 0;
            while (k < check.length) {
                segments.push(check.slice(k, k + j));
                k += j;
            }

            if (segments.every((x) => x === segments[0])) {
                cnt += i;
                break;
            }
        }
    }
}

console.log(cnt);
