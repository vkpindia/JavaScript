/**
 * Assignment Operator==> this operator we use to assign the value to left operand. This also perform the operaton on 
 * two operands which are left operand and right operand. left operand could be a variable and right operand 
 * could be a literal, expression etc.
 * It always assign the right operand value to left operand
 * 
 * there are many assignment operators are are available:
 * =, +=, -=, *=, /=, %=, **=, 
 */

const age = 20;
console.log(age);

// const a = 10;
// const b = 20;

// const c = a + b;

// console.log('result:', c)// 30

let a = 10;
a += 20// a = a + 20

let b = 5;
b *= 7;// b = b*7

console.log('result:', a, b)// 30, 35;

const arr = [10, 20, 30, 40];
let sum = 0;
for(let i = 0; i<arr.length; i++){
   sum *= arr[i];// sum = sum + arr[i]
   /**
    * arr[0]=> 10 ==> sum = sum + arr[0] => sum = 10
    * arr[1]=> 20 ==> sum =  sum + arr[1] => sum = 30
    * arr[2]=> 30 ==> sum =  sum + arr[2] => sum = 60
    * arr[3]=> 40  ==> sum =  sum + arr[3] => sum = 100
    */
}

// BODMAS
/**
 * BODMAS==>
 * B=> Bracket
 * O=> Ordser of power or roots
 * D=> Division
 * M=> Multiplication
 * A=> Addition
 * S=> Subtraction
 */

let exp = 10*(20+10)/2-10; //==> 10*30/2-10 => 10*15-10 => 150-10 ==> 140;
console.log('exp:', exp)// 140

console.log('Sum:', sum);//100
