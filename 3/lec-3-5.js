/*
const arr1 = [1, 2, 3, 4, 5]

const arr2 = arr1.slice(0, 3);

const arr3 = arr1.slice(3, 5);

console.log(arr2, arr3);


const arr1 = [1, 2, 3, 4, 5];

const cloned = arr1.slice();

console.log(cloned);
*/

function toArray() {
    return Array.prototype.slice.call(arguments);
}

console.log(toArray(2, 5, 6, 'test'));
console.log(toArray(2, 5, 6, 'test').__proto__.constructor);