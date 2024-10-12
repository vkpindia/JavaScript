// Copying array
/**
 * Q1. What is deep copy and shalow copy in Javascript.
 */

let arr = [1025, true, 'John', 'xyz@gmail.com', [65, 67, 69, 80, 95]];

// let arr_copy = arr; // Shallow copy

let arr_copy = [...arr];// [1025, true, 'John', 'xyz@gmail.com', [65, 67, 69, 80, 95]]// deep copy

let lastRemovedEle = arr_copy.pop();

console.log('arr:', arr);
console.log('arr_copy:', arr_copy);
