// const arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[5] = 6;
// // console.log(arr.length);
// // console.log(arr);

// const names = ['wali', 'hasib', 'sakib'];
// names[names.length] = 'jafor';
// console.log(names.length, names);

// const arr1 = new Array();
// console.log(arr1, arr1.length);


const a2 = new Array(5);
// console.log(a2, a2.length);

// console.log(a3, a3.length);

// Factory Pattern
const b1 = Array(4);
// console.log(b1, b1.length);
// console.log(b2, b2.length);

const a3 = new Array(1, 2, 3);
const b3 = Array(1, 3, 4);

console.log(a3.__proto__.constructor);
console.log(b3.__proto__.constructor);