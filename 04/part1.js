const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n");

let x = 0;
for (let i = 0; i < file.length; i++) {
    for (let j = 0; j < file[i].length; j++) {
        if (file[i][j] !== "@") continue;

        let papers = 0;
        for (let k = -1; k <= 1; k++) {
            for (let m = -1; m <= 1; m++) {
                if (k === 0 && m === 0) continue;
                if (
                    i + k >= file.length ||
                    i + k < 0 ||
                    j + m >= file[i].length ||
                    j + m < 0
                )
                    continue;

                const curr = file[i + k][j + m];

                if (curr === "@") papers++;
            }
        }

        if (papers < 4) x++;
    }
}

console.log(x);
