// Declare an empty array;
let names = [];

// Declare an array with more than 5 number of elements
 names =['kelvin','mate','mukotso','liverpool','chelsea','science','engineering'];

// Find the length of your array
names.length

// Get the first item, the middle item and the last item of the array
// first
let first_item =names[0];

// middle
let middle_item =names[Math.floor(names.length / 2)];

// last
let last_item =names[names.length - 1];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1,3,'test','nairobi',true,'finalize','test','tools'];
let length = mixedDataTypes.length;

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']

// Print the array using console.log()
console.log (itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length - 1])

// Print out each company
itCompanies.forEach( company =>{
    console.log(company)
});

// Change each company name to uppercase one by one and print them out
itCompanies.forEach( company =>{
    console.log(company.toUpperCase())
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(',') + ' are Big IT Companies');


// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log (itCompanies.includes('samsung') ? 'samsung' : 'Company not found');
console.log (itCompanies.includes('Facebook') ? 'Facebook' : 'Company not found');


// alternative
console.log (itCompanies.indexOf('samsung') ? 'samsung' : 'Company not found');
console.log (itCompanies.indexOf('Facebook') ? 'Facebook' : 'Company not found');

// Filter out companies which have more than one 'o' without the filter method



// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2) +1))

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2),1));

// Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.length - 1 , 1));

// Remove all IT companies
console.log(itCompanies.splice());