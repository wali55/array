/*

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [].concat(arr1, arr2, 7);

console.log(arr3);