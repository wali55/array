// const m = arr[2];
// console.log(m)

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);
// console.log(sum / arr.length);

// let largestNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largestNumber) {
//     largestNumber = arr[i];
//   }
// }

// console.log(largestNumber);

// smallest number in an array

// let smallestNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < smallestNumber) {
//     smallestNumber = arr[i];
//   }
// }

// console.log(smallestNumber);

// second largest number
// const arr = [45, 67, 23, 45, 89, 54, 2, 100];

// const newArr = [...arr].sort((a, b) => {
//   return a - b;
// });

// console.log(newArr[newArr.length - 2]);

// second smallest number
const arr = [45, 67, 23, 45, 89, 54, 2, 100];

const newArr = [...arr].sort((a, b) => {
  return b - a;
});

console.log(newArr[newArr.length - 2]);
