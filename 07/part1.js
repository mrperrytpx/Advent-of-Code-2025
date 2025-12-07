const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

const START = "S";
const SPACE = ".";
const SPLITTER = "^";

for (let row = 0; row < file.length; row++) {
    for (let col = 0; col < file[row].length; col++) {
        if (file[row][col] === START) {
            let cnt = 0;
            let queue = [[row, col]];
            let visited = new Set();

            while (queue.length) {
                let [cr, cc] = queue.pop();
                const key = `${cr},${cc}`;
                if (visited.has(key)) continue;
                visited.add(key);

                if (cr + 1 >= file.length) continue;

                const next = file[cr + 1][cc];
                if (next === SPACE) queue.push([cr + 1, cc]);

                if (next === SPLITTER) {
                    queue.push([cr + 1, cc - 1]);
                    queue.push([cr + 1, cc + 1]);
                    cnt++;
                }
            }

            console.log(cnt);
        }
    }
}
