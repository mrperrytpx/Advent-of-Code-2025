// const fs = require("fs");
// const { isPromise } = require("util/types");
// const arg = process.argv[2];

// let file = fs
//     .readFileSync(__dirname + `/${arg ? arg : "example"}.txt`, "utf-8")
//     .replace(/\r/g, "")
//     .split("\n");

// let extr = {};
// for (let i = 0; i < file.length - 1; i++) {
//     const [lx, ly] = file[i].split(",").map(Number);
//     const [rx, ry] = file[i + 1].split(",").map(Number);

//     if (lx !== rx) {
//         const minX = Math.min(lx, rx);
//         const maxX = Math.max(lx, rx);

//         if (!extr[ly]) {
//             extr[ly] = { min: minX, max: maxX };
//         } else {
//             extr[ly].min = Math.min(extr[ly].min, minX);
//             extr[ly].max = Math.max(extr[ly].max, maxX);
//         }
//     } else {
//         const minY = Math.min(ly, ry);
//         const maxY = Math.max(ly, ry);

//         if (!extr[lx]) {
//             extr[lx] = { min: minY, max: maxY };
//         } else {
//             extr[lx].min = Math.min(extr[lx].min, minY);
//             extr[lx].max = Math.max(extr[lx].max, maxY);
//         }
//     }
// }
// const up = file.slice(0, Math.floor(file.length / 2)).reverse();
// const down = file.slice(Math.floor(file.length / 2));

// let upMax = 0;
// for (let i = 0; i < up.length; i++) {
//     const [ay, ax] = up[i].split(",").map(Number);

//     for (let j = i + 1; j < up.length; j++) {
//         const [by, bx] = up[j].split(",").map(Number);

//         const oppA = [by, ax];
//         const oppB = [ay, bx];

//         let oppAWithin =
//             extr[ay] &&
//             oppA[1] >= extr[ay].min &&
//             oppA[1] <= extr[ay].max &&
//             extr[bx] &&
//             oppA[0] >= extr[bx].min &&
//             oppA[0] <= extr[bx].max;

//         let oppBWithin =
//             extr[by] &&
//             oppB[1] >= extr[by].min &&
//             oppB[1] <= extr[by].max &&
//             extr[ax] &&
//             oppB[0] >= extr[ax].min &&
//             oppB[0] <= extr[ax].max;

//         if (oppAWithin && oppBWithin) {
//             const h = Math.abs(bx - ax) + 1;
//             const w = Math.abs(by - ay) + 1;

//             const area = h * w;
//             if (area > upMax) upMax = area;
//         }
//     }
// }

// let downMax = 0;
// for (let i = 0; i < down.length; i++) {
//     const [ay, ax] = down[i].split(",").map(Number);

//     for (let j = i + 1; j < down.length; j++) {
//         const [by, bx] = down[j].split(",").map(Number);

//         const oppA = [by, ax];
//         const oppB = [ay, bx];

//         let oppAWithin =
//             extr[ay] &&
//             oppA[1] >= extr[ay].min &&
//             oppA[1] <= extr[ay].max &&
//             extr[bx] &&
//             oppA[0] >= extr[bx].min &&
//             oppA[0] <= extr[bx].max;

//         let oppBWithin =
//             extr[by] &&
//             oppB[1] >= extr[by].min &&
//             oppB[1] <= extr[by].max &&
//             extr[ax] &&
//             oppB[0] >= extr[ax].min &&
//             oppB[0] <= extr[ax].max;

//         if (oppAWithin && oppBWithin) {
//             const h = Math.abs(bx - ax) + 1;
//             const w = Math.abs(by - ay) + 1;

//             const area = h * w;
//             if (area > downMax) downMax = area;
//         }
//     }
// }

// console.log(upMax, downMax);
