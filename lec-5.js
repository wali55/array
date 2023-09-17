// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const division = (a, b) => a / b;
// const modules = (a, b) => a % b;

// const funcs = [add, sub, multiply, division, modules];

// for (let i = 0; i < funcs.length; i++) {
//   const result = funcs[i](10, 20);
//   console.log(`[${funcs[i].name}] ${result}`);
// }
/* 
// array of arrays - multi-dimensional array
const pointTable = [
  [1, 3],
  [4, 5],
  [6, 7],
  [9, 13],
];

// one dimensional traverse
for (let i = 0; i < pointTable.length; i++) {
    console.log(
      `Point ${i} - x = ${pointTable[i][0]} and y = ${pointTable[i][1]}`
    );
}
*/

// two dimensional traverse
/*
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      console.log(numbers[i][j]);
    }
}
*/

/*
const pointTable = [
  [1, 3],
  [4, 5],
  [6, 7],
  [9, 13],
];

for (let i = 0; i < pointTable.length; i++) {
  for (let j = 0; j < pointTable[i].length; j++) {
    console.log(pointTable[i][j]);
  }
}
*/

const matrixA = [
  [1, 3],
  [1, 0],
  [1, 2],
];

const matrixB = [
  [0, 0],
  [7, 5],
  [2, 1],
];

const matrixSum = (matrixA, matrixB) => {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
};

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);
