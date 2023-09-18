/*
const num = [1, 2, 7, 4, 5];
num[2] = 3;
console.log(num);
*/

const students = [
    { id: 1, name: 'wali' },
    { id: 2, name: 'hasib' },
    { id: 3, name: 'sakib' },
];

const givenID = 3;
const updateName = 'sakib al hasan';

for (let student of students) {
    if(student.id === givenID) {
        student.name = updateName;
        break;
    }
}

console.log(students);