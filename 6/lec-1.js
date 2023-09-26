/**/
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
