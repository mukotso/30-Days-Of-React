// Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function solveQuadratic (a,b,c){
    let root1, root2;
// calculate discriminant
    let discriminant = b * b - 4 * a * c;

// condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

// condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

// if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        console.log(
            `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        );
    }
}
console.log('solve quadratic equation',solveQuadratic()) // {0}
console.log('solve quadratic equation',solveQuadratic(1, 4, 4)) // {-2}

// Declare a function name printArray.
// It takes array as a parameter and it prints out each value of the array.

const printArray = (array) => {
    array.forEach(value => {
        console.log(value)
    })
}

printArray([1, 2, 7, 8, 9, 80])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

const showDateTime = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
}

console.log('show date time formatted',showDateTime());

// Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x, y) => {
    const values= [y,x];
    return [x,y] =values ;
}

console.log('swapValues', swapValues(1,2))
// Declare a function name reverseArray.
// It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (array) => {
    let reversed_array = [];
    array.forEach(value => {
        reversed_array.unshift(value)
    })

    return reversed_array;
}

console.log('reverse array', reverseArray([1, 2, 3, 4]))

// Declare a function name capitalizeArray.
// It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (array) => {
    return array.forEach(value => {
        return value.toUpperCase()
    })
}
console.log('capitalize array', capitalizeArray(['a', 'buyaaa', 'Gsrtg', 'EWDSFSt']))

// Declare a function name addItem.
// It takes an item parameter and it returns an array after adding the item

const addItem = (items) => {
    let sum = 0;
    items.forEach(value => {
        sum += value
    })
    return [sum]
}
console.log('add items', addItem([1, 2, 3, 4]))

// Declare a function name removeItem.
// It takes an index parameter and it returns an array after removing an ite

const removeItem = (index) => {
    let array = [1, 2, 3, 4];
    array.splice(index, 1);
    return array;
}
console.log('remove item', removeItem(1))

// Declare a function name evensAndOdds .
// It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (count) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < count; i++) {
        if (i % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }

    }
    return {
        'even': even,
        'odd': odd
    }
}
console.log('it counts number of evens and odds in the number', evensAndOdds(100))

// Write a function which takes any number of arguments and return the sum of the arguments

const sumNumbers = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log('sum numbers', sumNumbers(1, 2, 3, 4))

// Declare a function name userIdGenerator.
// When this function is called it generates seven character id. The function return the id.

const userIdGenerator = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log('generates id', userIdGenerator(7))