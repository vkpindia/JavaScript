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
};

console.log(company.name)
console.log(company.location.country);
const {name, location: {city, country}, departments:[{name_1, employees:[x, y] }, {name_2, employees:[x1, y1]}]} = company;

console.log(name) // 'TechCorp'
console.log(country)/**    location: {
    city: 'New York',
    country: 'USA'
},  */


// console.log(departments); 
/** [
    {
      name: 'Engineering',
      employees: ['Alice', 'Bob']
    },
    {
      name: 'HR',
      employees: ['Charlie', 'David']
    }
]*/

console.log(city);
console.log(x, y);

// console.log('employee_2:', employee_2);