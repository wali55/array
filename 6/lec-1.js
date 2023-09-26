/*
const names = [
    'wali',
    'hasib',
    'sakib'
];

function reuse(arr, logic) {
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr);
    }
}

function logic1(value) {
    console.log(value);
}

function logic(value, index, array) {
    console.log(value, index, array);
}

reuse([1, 2], logic);
reuse(['one', 'two'], logic1);
// reuse(names);


function myForEach(arr, cb) {
    for (let i =  0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

const num1 = [1, 2, 3, 4];

let sum = 0;

myForEach(num1, (v) => sum += v);

console.log(sum);
*/

const names = ["wali", "hasib", "sakib"];

names.forEach((value, index) => console.log(`${index} - ${value}`));