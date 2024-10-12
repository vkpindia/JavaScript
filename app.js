// Array and Object
// Primitive and not premitive
// premitive=> number, string, boolean, null, symbol, undefined, bigInt
// non-premitive=> Array and object
// let, var, const

/**********************Array Declaration************************/
const arr = [10, 20, 30, 40, 50];// declaration using Array literal
// let arry = new Array(10, 20, 30, 40, 50)// Decration using Array constructor


/**********************Array data assignment************************/
// arr = [10, 20, 30, 40, 50,];

// console.log('Print array:', arr);
// console.log('Array constructor:', arry);

/**********************How to get the array elements************************/
// How to get the array elements
let num_20 = arr[1]// 20 == arr.at(1)
let num_50 = arr[4]// 50 == arr.at(4)
// console.log('num_20:', num_20);// 20
// console.log('num_50:', num_50);// 50


/**********************Replace the array element based on index***********************/
arr[0] = 70; //[70, 20, 30, 40, 50]
arr[1] = 80; //[70, 80, 30, 40, 50]
// console.log('Print array:', arr[0], arr[1]);


/****************Add The new elements to an Array*********************/
arr[5] = 60;
arr[arr.length] = 70;// adding the element at last in array
// console.log('New array:', arr);

/*****************Skip to add element in next index and add to its next index*************/
arr[8] = 5; //[70, 80, 30, 40, 50, 60, 70, undefined, 5]
// console.log('Skipped next index and added of its next:', arr, arr[7]);

/**************************Getting the last element from an array****************************/
let lastIndexElement = arr[arr.length-1];
let lastEleUsingAt = arr.at(-1);
// console.log('lastIndexElement:', lastIndexElement, lastEleUsingAt);

/********************************Getting the Array length*************************************/
let arrLength = arr.length;
// console.log('Arry length:', arrLength);

/**************************Array manipilation using Array methods************************/
// Array.push(elemnets)==> This method is used to add the elements at last in an Array.
// Array.pop()==> This method is used to remove the elements at last in an Array and returns the last element
// Array.unshift(elements)==> This method is used to add the elements at start in an Array.
// Array.shift()==> This method is used to remove the elements at start in an Array and returns the first element
// Array.splice(index, deleteCount, elementsWantToAdd)

// Add the elements at last in an array
// console.log('Print array before pushing elements:', arr);
arr.push(10);
arr.push(98, 81, 67);
// console.log('Print array after pushing elements:', arr);

// remove the elements  in from last from an array
const lastRemovedElement = arr.pop();
// console.log('lastRemovedElement:', lastRemovedElement); //67
console.log('arr:', arr);// [70, 80, 30, 40, 50, 60, 70, undefined, 5, 10, 98, 81]

// Add the elements from start in an array
// console.log('Print array before unshifting elements:', arr);
arr.unshift(65);// add single element from start
arr.unshift(93, 94, 95);// add multiple elements form start
// console.log('Print array after unshifting elements:', arr);

//remove the elements  in from start from an array
let firstRemovedElement = arr.shift();// remove element from start
// console.log('firstRemovedElement:', firstRemovedElement);
// console.log('arr:', arr);

// Add and remove the elements from any index in an array
// console.log('elements before adding;', arr);
arr.splice(4, 0, 45, 55); // add the element based on the index in an array
console.log('elements after adding;', arr);

arr.splice(6, 1); // Remove element from the given index

console.log('elements after adding;', arr);


