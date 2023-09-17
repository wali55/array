/*
const arrp1 = [1, 2, 3];
arrp1[arrp1.length] = 4;

arrp1.push(5);
arrp1.push(6, 7);

const arrp2 = [8, 9];

// arrp1.push(...arrp2);
Array.prototype.push.apply(arrp1, arrp2);

console.log(arrp1);
arrU1.unshift(1, 2, 3);
arrU1.unshift(...arrU2);
*/

const arrU1 = [4, 5];
const arrU2 = [1, 2, 3];

Array.prototype.unshift.apply(arrU1, arrU2);

console.log(arrU1);