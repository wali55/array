// const arr1 = new Array(10);

// for (let i = 0; i < arr1.length; i++) {
//   arr1[i] = false;
// }

// console.log(arr1);

// const arr1 = new Array(10);

// arr1.fill(0);

// console.log(arr1);

// const names = ['wali', 'hasib', 'sakib'];

// names[0] = 'waliullah';
// names[1] = 'hasib ullah';
// names[2] = 'sakib al hasan';

// console.log(names);

// const response = new Array(9);

// response.fill(false);

// for (let i = 0; i < response.length; i++) {
//   const random = Math.floor(Math.random() * 10 + 1);
//   response[i] = random > 5 ? 'x' : 'o';
// }

// console.log(response);

const names = ['wali', 'hasib', 'sakib'];

const update = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }

  return arr;
};

const updatedArray = update(names);

console.log(names);
console.log(updatedArray);
console.log(names === updatedArray);
