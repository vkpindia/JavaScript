/**
 * JS operators perform the operation between the operands
 * operands means data, data could be anything.
 * Based on the operator, operands will be managed
 */

/**
 * Available operators in jS:
 * 1. Arithmatic Operator(+, -, *, /, %, **)
 * 2. Logical Operator(&&, !, ||)
 * 3. Increment-Decrement(--, ++)
 * 4. Bitwise Operator(|, &, ^)
 * 5. Conditional Operator(Ternary operator) (?:)
 * 6. Optional operator(?)
 * 7. Assignment Operator (=, *=, +=, -=, %=, **=)
 * 8. comparison operator (<, >, ==, ===, <=, >=, !=, ^=)
 * 9. Spread operator(...)
 * 10. Null coalescing operator(??)
 * 11. Type operator(typeof, instanceof)
 */


// Arithmatic operator(+)
//* Implecitely null will be converted as 0 in JavaScipt

let a = 10; // number
let b = 20; // number

let res = a + b;//30

// let a = 10; // number
// let b = "20"; // number

// let res = a + b;//1020

// let a = 10; // number
// let b = null; // number null = 0

// let res = a + b;//

// let a = undefined; // number
// let b = 20; // number

// let res = a + b;//Nan

// let a = {}; // number
// let b = 20; // number

// let res = a + b;//{}20

// let a = [] // number
// let b = 20; // number

// let res = a + b;//20

console.log(res, ':res'); //Nan

// Arithmatic operator(-)

// let x = 10;
// let y = 20;

// let result = x - y; // -10

// let x = 10;
// let y = '20';

// let result = x - y; // -10

// let x = 10;
// let y = 'abc';

// let result = x - y; // NaN

// let x = 10;
// let y = null;// 0

// let result = x - y; // 10

// let x = 10;
// let y = true;// 1 ==> true == 1, false = 0

// let result = x - y; // 9

// console.log('result:', result);

// Arithmatic Operator (*)

// let x = 10;
// let y = 2;// 

// let result = x * y; // 20

// let x = 10;
// let y = null;// 0

// let result = x * y; // 0

// let x = 10;
// let y = true;// 

// let result = x * y; // 10

// let x = 10;
// let y = '20';// 20

// let result = x * y; // 200


// let x = 10;
// let y = 'abc';// 

// let result = x * y; // NaN

// let x = 10;
// let y = undefined;// 

// let result = x * y; // NaN

// Arithmatic Operator (% modulus)=> return remiders of dividend

// let x = 17;
// let y = 2;// 

// let result = x % y; // 1


// Arithmatic Operator(**)

// let x = 17;
// let y = 0;// 

// let result = x ** y; // 1