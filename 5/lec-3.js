/**
 * Array push and shift methods


const Queue = require('./lec-2');

const queue = new Queue();

queue.enqueue('Task 1');
queue.enqueue('Task 2');
queue.enqueue('Task 3');

queue.showQueue();
queue.dequeue();
console.log(queue.next());
 */

const queue = [];

queue.push('Item 1');
queue.push('Item 2');
queue.push('Item 3');

console.log(queue);

queue.shift();
queue.shift();

console.log(queue);