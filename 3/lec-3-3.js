/*
const num = [1, 2, 3, 4, 5];
num.shift();
console.log(num);


const num = [1, 2, 3, 4, 5];
num.pop();

console.log(num);


const num = [1, 2, 3, 4, 5];
num.length = num.length - 1;

console.log(num);

const num = [1, 2, 3, 4, 5];

num.splice(2, 2);

console.log(num);

const nums = [1, 2, 3, 4, 5];

const toBeDeleted = 4;

for (let i = 0; i < nums.length; i++) {
    if(nums[i] === toBeDeleted) {
        nums.splice(i, 1);
    }
}

console.log(nums);


let num = [1, 2, 3, 4, 5];
const toBeDeleted = 4;

num = num.filter((item) => item !== toBeDeleted);

console.log(num);
num[1] = undefined;


let num = [1, 2, 3, 4, 5];

delete num[1];

console.log(num);



let x = [1, 2, 3];
let y = x;

x = [];

console.log(x, y);



let x = [1, 2, 3];
let y = x;

x.length = 0;

console.log(x, y);

*/


let num = [1, 2, 3, 4, 5];

while (num.length) num.pop();

console.log(num);