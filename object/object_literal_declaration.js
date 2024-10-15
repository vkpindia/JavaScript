// Object Declaration
// 1. Object literal({})
// 2. Object Constructor(new Object())

/**
 * Syntax==>
 1. variableDeclarationKey variable_name = {};// Object literal
 2. variableDeclarationKey variable_name = new Object();// Object Contructor
 * 
 */


 // 1. Object literal({}) way to create JS object

 const person = {
    name: 'John',
    email: 'john@gmail.com',
    address: 'Noth America',
    age: 30,
    phone: 654872684924
 };

 // Adding the propeties in Js Object

 person.zipCode = '7862986';
 person['favourite food'] = 'Idli';
 person['favourite-game'] = 'Cricket'

 console.log('Print person Object', person);

 // Accessing the properties in JS Object

 let name = person.name;
 let email = person.email;
 let address = person.address;
 let age = person.age;
 let mobile = person.phone;
 let zipCode = person.zipCode;
 let favouriteFood = person['favourite food'];
 let favouriteGame = person['favourite-game'];

 console.log(name);
 console.log(email);
 console.log(address);
 console.log(age);
 console.log(mobile);
 console.log(zipCode);// 7862986

