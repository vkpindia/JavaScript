// Deepcopy and shllow copy


// const location = 'location';

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

// shallow copy of an object does not create new reference which effect the origin object mostly if nested 
// const newCompany = {...company};
// const newCompany = Object.assign({}, company)


// newCompany.location.street = 'abc';
// delete newCompany.isHiring;


// deep copy of an object create a new reference and does not modify the original object
const newCompany = JSON.parse(JSON.stringify(company));
// const newCompany = structuredClone(company)

newCompany.location.street = 'abc';
delete newCompany.isHiring;

console.log('newCompany:', newCompany)
console.log('company:', company)


