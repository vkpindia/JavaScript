// 2. Object Constructor(new Object()) way to create JS object

// Object declation

const person = new Object();

// Add the properties to Person Object

person.name  = 'John';
person['mobile number'] = 7863598315;
person.email = 'john@gmail.com';
person.age = 30;
person.zipCode = '7862986';
person['favourite food'] = 'Idli';
person['favourite-game'] = 'Cricket';

console.log('before modification person', person);

// Access the Person object Properties

console.log('Person Name:', person.name);
console.log('Person Contact:', person['mobile number']);
console.log('Person Email:', person.email);


// Modify the Object property

person['favourite-game'] = 'Football';
person.age = 34;

console.log('after modication person', person);


// Removing the object perties
// While removing the object prties , we have to use js 'delete' keyword

delete person['mobile number'];
delete person.age;

console.log('after deleting age and mobile number from person:', person);

console.log('age:', person.age)
console.log('mobile no:', person['mobile number']);


const arr = ['abc', 'xyz'];
delete arr[0]

console.log(arr, arr[0], arr.length);

// getting the keys and values of an object in the form of array
// keys: ['name', 'address', 'email', 'zipCode', 'favouritefood', 'favourite-game']
// values: ['John', 'America', 'john@gmail.com', 'Idli', 'Footbal']


// We can get the array of keys by using the Object.keys() method
const PersonObjKeysv = Object.keys(person);
console.log('PersonObjKeysv:', PersonObjKeysv);

// We can get the array of values by using the Object.values() method
const PersonObjvalues = Object.values(person);
console.log('PersonObjvalues:', PersonObjvalues);







