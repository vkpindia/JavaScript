/**
 * 1. Computed property in object
 * 2. in operator in object
 * 3. Destructuring
 * 4. Shallow copy and deep copy
 */

// Computed property

const favouriteFoodKey = 'favouriteFood';
const skill = `skill${1+3}`;// skill4

const skills = ['skill1', 'skill2', 'skill3']; // skills[2] ==> skill3 

 const person = {
    name: 'John', // static property
    email: 'john@gmail.com', // static property
    address: 'Noth America', // static property
    age: 30, // static property
    phone: 654872684924, // static property
    [favouriteFoodKey]: 'Idli', // computed property
    [skills]: 'Web Propgramming'// computed property
 };

 // Accessing the computed keys value
 console.log('Person:', person);
 console.log('skill:', person[skills], '\nfavoriteFood:', person[favouriteFoodKey])