// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }

// console.log(sum);
const nums = [1, 4, 5, 76, 8, 145];

let sum = 0;

nums.forEach((value, index) => {
  if (index <= 3) {
    sum += value;
  }
});

console.log(sum);
