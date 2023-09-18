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


const arrU1 = [4, 5];
const arrU2 = [1, 2, 3];

Array.prototype.unshift.apply(arrU1, arrU2);

console.log(arrU1);

*/

const arrS1 = [1, 2, 3, 5, 6, 9];
const arrS2 = [7, 8];
arrS1.splice(3, 0 , 4);
arrS1.splice(6, 0, ...arrS2);

console.log(arrS1);