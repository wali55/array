/**
 * Array push and pull methods
 */

/*
const Stack = require('./lec-2.js');

const stack = new Stack();

const text = 'hello';

for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}

let reversedText = '';

while (!stack.isEmpty()) {
    console.log('popped');
    console.log(stack);
    reversedText += stack.pop();
}

console.log(reversedText);
console.log(stack);
*/

// JavaScript Array Stack Method

const text = 'hello';
const JsStack = [];

for (let i = 0; i < text.length; i++) {
    JsStack.push(text.charAt(i));
}

let result = '';

while (JsStack.length) {
    result += JsStack.pop();
}

console.log(result);