// Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters
// and the second input is the number of ids which are supposed to be generated.
//
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '


const userIdGenerator = (length, number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var n = 0; n < number; n++) {
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
console.log('generates id', userIdGenerator(7, 5))

// Write a function generateColors which can generate any number of hexa or rgb colors.
//
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log('get Random colors', getRandomColor())

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

console.log('shuffle array', shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]))

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(n) {
    let answer = 1;
    if (n === 0 || n === 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

console.log("The factorial of a number ", factorial(4));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(value) {
    return value.length === 0
}

console.log("Check if its empty ", isEmpty([]));

// Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.

function average(value) {
    let sum = 0;
    value.forEach(value => {
        sum += value
    })
    return sum / (Math.floor(value.length));
}

console.log("avarage of number ", average([1, 2, 3, 4,5]));