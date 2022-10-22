// The following is an array of 10 students ages: js
// import {countries} from "./countries";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log('age array', ages)
const max_age = Math.max(...ages);
const min_age = Math.min(...ages);

console.log('max age', max_age);
console.log('min age', min_age);

// Find the median age(one middle item or two middle items divided by two)

const mid = Math.floor(ages.length / 2),
    nums = [...ages].sort();
const median = ages.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

console.log('median', median)

// Find the average age(all items divided by number of items)
let age_sum = 0;
ages.forEach(age => {
    age_sum += age
})
const average = age_sum / ages.length + 1
console.log('average age', average);

// Find the range of the ages(max minus min)

const range = max_age - min_age;
console.log('range', range)

// Compare the value of (min - average) and (max - average), use abs() method

const result = Math.abs((min_age - average) - (max_age - average));

console.log('comparison', result);
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
// 1.Slice the first ten countries from the countries array

const sliced_countries = countries.slice(0, 10);
console.log('sliced_countries', sliced_countries);

// Find the middle country(ies) in the countries array
const middle_county = countries[Math.floor(countries.length / 2)]
console.log('middles country', middle_county)

// Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.

const array_1 = countries.slice(0, Math.ceil(countries.length / 2));
const array_2 = countries.slice(Math.ceil(countries.length / 2), countries.length + 2);

console.log('array-1', array_1);
console.log('array_2', array_2);