const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Print the price of each product using forEach
// Print the product items as follows using forEach
// The price of banana is 3 euros.
//     The price of mango is 6 euros.
//     The price of potato is unknown.
//     The price of avocado is 8 euros.
//     The price of coffee is 10 euros

products.forEach(product=>{
    console.log(`The price of ${product.product} is ${product.price} euros `)
})

// Calculate the sum of all the prices using forEach
products.forEach(product=>{
    let sum = 0;
    sum += parseInt(product.price)
    console.log('sum',sum)
})



// Create an array of prices using map and store it in a variable prices
let prices_array = products.map(product=>{
    let prices = [];
    return prices.push(product.price)
})
console.log('prices array',prices_array)

// Filter products with prices
let products_filter = products.filter(product=>{
    let prices = [];
    return prices.push(product.price)
})
console.log('prices filter',products_filter)

//     Use method chaining to get the sum of the prices(map, filter, reduce)
let sum_using_map = products.map(product=>{
    let map_sum = 0;
   map_sum += product.price
    return map_sum;
})
console.log('sum_using_map',sum_using_map)

// Calculate the sum of all the prices using reduce only
let reduce_sum = products.reduce((a,b)=> a+b)
console.log('reduce sum',reduce_sum)

// Find the first product which doesn't have a price value
let index = products.price.indexOf(' ');
console.log(' first product which doesn\'t have a price value',products[index]);

// Find the index of the first product which does not have price value
console.log('index of the first product which does not have price value',products.price.indexOf(' '));

// Check if some products do not have a price value
console.log('Check if some products do not have a price value',products.some(product=> product.price === ""));

// Check if all the products have price value
console.log('Check if some products do not have a price value',products.every(product=> product.price !== ""));

// Explain the difference between forEach, map, filter and reduce


// forEach
// We use forEach when we like to iterate through an array of items.
//The forEach method is used only with array and we use forEach if you are interested in each item or index or both.

// filter--it filters out items based on some criteria.
//The filter method like forEach and map is used with an array and it returns an array of the filtered items.

//reduce is used with array and it returns a single value.
//We use the reduce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array.

//map
//We use the map method whenever we like to modify an array.


// Explain the difference between filter, find and findIndex

// filter--it filters out items based on some criteria.
//The filter method like forEach and map is used with an array and it returns an array of the filtered items.

// find
// find just return the first occurrence of an item instead of an array.


// findIndex
// The findIndex method works like find but findIndex returns the index of the item.
// The findIndex return the index of the first occurrence of an item.


// Explain the difference between some and every

// some
// The some method is used with array and return a boolean.
// If one or some of the items satisfy the criteria the result will be true else it will be false.

// every
// The method every is somehow similar to some but every item must satisfy the criteria.
// The method every like some returns a boolean.
