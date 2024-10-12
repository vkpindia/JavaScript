
// Nested Object in JS
const company = {
    name: 'TechCorp',
    location: {
        city: 'New York',
        country: 'USA'
    }, 
    departments: [
        {
          name: 'Engineering',
          employees: ['Alice', 'Bob']
        },
        {
          name: 'HR',
          employees: ['Charlie', 'David']
        }
    ],
    isHiring: true  
}

// let name = company.name; // TechCorp
// let city = company.location.city;
// let country = company.location.country;

//   [
//     { name: 'Engineering', employees: [ 'Alice', 'Bob' ] },
//     { name: 'HR', employees: [ 'Charlie', 'David' ] }

//   ]

// Modify company object
company.location.street = 'abc' // add the street property to location
delete company.location.city; // remove the city from location
company.departments[0].head = 'Eve';
company.departments[1].head = 'Scott';
// company.departments.pop();

// delete company.departments; // remove company departments

// Location Details
console.log('name:', company.name);
console.log('Location:', company.location);
console.log('City:', company.location.city);
console.log('Country:', company.location.country);

console.log('Company departments:', company.departments);

// to display company department
console.log('First Department:', company.departments[0]);
console.log('Second Department:', company.departments[1]);

// to display company department's name
console.log('First Department Name:', company.departments[0].name)
console.log('Second Department Name:', company.departments[1].name)


// to display company department's employees
console.log('First Department Employees:', company.departments[0].employees)
console.log('Second Department Employees:', company.departments[1].employees)

// Getting employeeys form departments available in company object
console.log('First Department 1st Employee:', company.departments[0].employees[0])
console.log('First Department 2nd Employee:', company.departments[0].employees[1])

console.log('Second Department 1st Employee:', company.departments[1].employees[0])
console.log('Second Department 2nd Employee:', company.departments[1].employees[1])

console.log('Is hiring open?', company.isHiring);



console.log('company Data:', company);
