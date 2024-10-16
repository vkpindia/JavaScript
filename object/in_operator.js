
// const location = 'location';

const isHiringKey = 'isHiring';

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
    [isHiringKey]: true
}



// Check if corresponding properties are available in Compony object

const isLocationExist = 'location' in company; 
const isLocationCityExist = 'city' in company.location; 
const isLocationStreetExist = 'street' in company.location; 
const isHiringExists = isHiringKey in company;

// console.log('isLocationExist:', isLocationExist);
// console.log('isLocationCtyExist:', isLocationCityExist);
// console.log('isLocationStreetExist:', isLocationStreetExist);

console.log('isHiringExists:', isHiringExists);