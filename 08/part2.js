const fs = require("fs");
const arg = process.argv[2];

let file = fs
    .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
    .replace(/\r/g, "")
    .split("\n")
    .map((x) => [x.split(",").map(Number)]);

let distances = [];
for (let i = 0; i < file.length; i++) {
    const [x1, y1, z1] = file[i][0];
    for (let j = i + 1; j < file.length; j++) {
        const [x2, y2, z2] = file[j][0];
        const d = Math.sqrt(
            Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
        );

        distances.push([i, j, d].toString());
    }
}

distances.sort((a, b) => +a.split(",")[2] - +b.split(",")[2]);

class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
        this.count = n;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(a, b) {
        const repA = this.find(a);
        const repB = this.find(b);

        if (repA === repB) return;

        if (this.rank[repA] < this.rank[repB]) {
            this.parent[repA] = repB;
        } else if (this.rank[repA] > this.rank[repB]) {
            this.parent[repB] = repA;
        } else {
            this.parent[repB] = repA;
            this.rank[repA]++;
        }
        this.count--;
        return;
    }
}

const dsu = new DSU(file.length);
for (let pair of distances) {
    const [a, b] = pair.split(",").map(Number);

    dsu.union(a, b);

    if (dsu.count === 1) {
        console.log(file[a][0][0]);
        console.log(file[a][0][0] * file[b][0][0]);
        break;
    }
}
