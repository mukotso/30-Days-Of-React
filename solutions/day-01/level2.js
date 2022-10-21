// Create a separate countries.js file and store the countries array into this file,
// create a separate file web_techs.js and store the webTechs array into this file.
// Access both file in main.js file

// require('countries')
// import {countries} from"./countries"
// console.log(webTechs);
// console.log(countries);


// First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes('meat') || shoppingCart.unshift('meat')
console.log('add meat', shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes('sugar') || shoppingCart.push('sugar')
console.log('add sugar', shoppingCart);
// remove 'Honey' if you are allergic to honey
let allergic_to_honey = true
allergic_to_honey && shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log('delete honey if allergic', shoppingCart);
// modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log('modify Tea to Green tea', shoppingCart);


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
// In countries array check if 'Ethiopia' exists in the array
// if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

countries.includes('Ethiopia') ? 'Ethiopia' : countries.push('Ethiopia');
console.log('add Ethiopia if doesnt exist', countries)

// In the webTechs array check if Sass exists in the array and
// if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]
webTechs.includes('SASS') ? 'Sass is a CSS preprocess' : webTechs.push('SASS');
console.log('add SASS if doesnt exist', webTechs)

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log('fullstack',fullStack)