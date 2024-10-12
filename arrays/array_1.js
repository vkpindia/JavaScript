// Assignment Destructuring

let arr = [1025, true, 'John', 'xyz@gmail.com', [65, 67, 69, 80, 95]];

// let stuId = arr[0];
// let isPassed = arr[1];
// let stuName = arr[2];
// let StuEmail = arr[3];
// let StuMarks = arr[4];

let [_, __, stuName, ...arry] =  arr;

console.log('stuId:', _);
console.log('isPassed:', __);
console.log('stuName:', stuName);
console.log('arry:', arry);
// console.log('StuMarks:', StuMarks);
