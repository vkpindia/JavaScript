/**
 * Logical Operators(&&, ||, !)
 * Falsy Values in JS=> false, null, undefined, 0(zero), "", NaN
 * Truthy Values==> Apart from the falsy value all the values are truthy
 */

/**
 * Logical AND(&&) Operators=> 
it evaluate the operands from left to right
If first operand is falsy value then it will return first operand value else It will return the second operand value
*/

// false && true ==> false
// false && false ==> false
// true && false ==> false
// true && true ==> true

// console.log(false && true)// false
// console.log('' && 20)// ''
// console.log(10 && '')// ''

// console.log(10 && 20)// 20

// console.log(null && 'hello');// null
// console.log('scott' && 'john');// john

// '' && 20 ==> '' 
// 10 && '' ==> ''

/**Logical OR(||) Operator=>
it evaluate the operands from left to right
If first operand is truthy value then it will return first operand value else It will return the second operand value
*/


// false || true ==> true
// false || false ==> false
// true || false ==> true
// true || true ==> true

// console.log(false || true)// true
// console.log('' || 20)// 20
// console.log(10 ||'')// 10

// console.log(10 || 20)// 10

// console.log(null || 'hello');// hello
// console.log('scott' || 'john');// scott

//  '' || 20  || 10   ==> '' || 20  ==>  20 || 10 ==> 20
// 10 || '' ==> 10

/**Logical NOT(!) Operator=>
this is a unary operator. It returns the true and false
If operand has truthy value the it will return false and if operand has falsy value then it will return true
*/

// !'' ==> true
// !true ==> false
// !false ==> true
// !30 ==> false
// !'scott' ==> false

console.log(!'scott')



