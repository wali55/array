/*
const names = [
  "stack wali",
  "stack hasib",
  "stack sakib",
  "stack mushfiq",
  "stack mustafizur",
];

function reuse(arr, logic) {
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr);
    }
}

let result1 = [];

reuse(names, (value) => {
    result1.push(value.length);
});

console.log(result1);


const names = [
  "stack wali",
  "stack hasib",
  "stack sakib",
  "stack mushfiq",
  "stack mustafizur",
];

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

let result1 = [];

reuse(names, (value) => {
  result1.push(value.toUpperCase());
});

console.log(result1);


const names = [
  "stack wali",
  "stack hasib",
  "stack sakib",
  "stack mushfiq",
  "stack mustafizur",
];

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

let result1 = [];

reuse(names, (value) => {
  result1.push(value.substr(6));
});

console.log(result1);


const names = [
  "stack wali",
  "stack hasib",
  "stack sakib",
  "stack mushfiq",
  "stack mustafizur",
];

function reuseAndMap(arr, logic) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i], i, arr));
  }
  return result;
}

const lengths = reuseAndMap(names, (value) => value.length);
const upper = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(names, (value) => value.substr(6));
console.log(lengths, upper, sliced);


const names = [
  "stack wali",
  "stack hasib",
  "stack sakib",
  "stack mushfiq",
  "stack mustafizur",
];

console.log(names.map((value) => value.length));
console.log(names.map((value) => value.toUpperCase()));
console.log(names.map((value) => value.substr(6)));
*/

const students = [
    { id: 1, name: 'wali', cGPA: 2.1, email: 'wali@email.com' },
    { id: 2, name: 'hasib', cGPA: 3.6, email: 'hasib@email.com' },
    { id: 3, name: 'sakib', cGPA: 3.9, email: 'sakib@email.com' },
];

const mappedStudents = students.map((value) => {
    return {
        ...value,
        title: `${value.name}'s Result`,
        description: `${value.name} got ${value.cGPA} out of 4.0. You have ${value.cGPA >= 3.0 ? 'Passed' : 'Failed'} the exam.`
    }
});

console.log(mappedStudents);