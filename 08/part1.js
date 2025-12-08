const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n")
    .map((x) => [x.split(",").map(Number)]);

let cnt = 0;
let connections = new Map();

while (arg ? cnt < file.length : cnt < 10) {
    let a = 0;
    let b = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < file.length; i++) {
        const [x1, y1, z1] = file[i][0];
        for (let j = i + 1; j < file.length; j++) {
            const [x2, y2, z2] = file[j][0];

            const d = Math.sqrt(
                Math.pow(x2 - x1, 2) +
                    Math.pow(y2 - y1, 2) +
                    Math.pow(z2 - z1, 2)
            );

            if (d < min) {
                if (connections.get(i)?.includes(j)) continue;
                min = d;
                a = i;
                b = j;
            }
        }
    }

    connections.set(a, (connections.get(a) || []).concat(b));
    connections.set(b, (connections.get(b) || []).concat(a));
    cnt++;
}

function countTrees(connections) {
    const visited = new Set();
    let sizes = [];

    function dfs(node) {
        visited.add(node);
        let size = 1;
        for (const neighbor of connections.get(node)) {
            if (!visited.has(neighbor)) {
                size += dfs(neighbor);
            }
        }

        return size;
    }

    for (const node of connections.keys()) {
        if (!visited.has(node)) {
            const size = dfs(node);
            sizes.push(size);
        }
    }

    return sizes;
}

const trees = countTrees(connections);
console.log(
    trees
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((prev, curr) => prev * curr, 1)
);
