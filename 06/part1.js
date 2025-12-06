const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n")
    .map((x) => x.trim().split(/\s+/));

let sum = 0;
for (let i = 0; i < file[0].length; i++) {
    let cs = 0;
    switch (file[file.length - 1][i]) {
        case "*": {
            if (cs === 0) cs = 1;

            for (let j = 0; j < file.length - 1; j++) {
                cs *= +file[j][i];
            }

            break;
        }
        case "+": {
            for (let j = 0; j < file.length - 1; j++) {
                cs += +file[j][i];
            }

            break;
        }
    }
    sum += cs;
}

console.log(sum);
