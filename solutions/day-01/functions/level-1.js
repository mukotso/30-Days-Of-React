// Declare a function fullName and it takes firstName, lastName as a parameter
// and it returns your full - name.

const generateFullName = (firstName, lastName) => {
    return firstName + ' ' + lastName
}
console.log('genereate full name', generateFullName('liverpool', 'anifield'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a, b) => a + b

console.log('add numbers', addNumbers(1, 2));

// Area of a circle is calculated as follows:
// area = π x r x r. Write a function which calculates _areaOfCircle

const _areaOfCircle = (r) => {
    const PI = 3.142
    return PI * r * r
}

console.log('Area of circle', _areaOfCircle(7));

// Temperature in oC can be converted to oF using this formula:
// oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(temp_in_celcius) {
    return (temp_in_celcius * 9 / 5) + 32.
}

console.log('convertCelciusToFahrenheit', convertCelciusToFahrenheit(10));


// Body mass index(BMI) is calculated as follows:
// bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi.


// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//     Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

const BMI = (weight, height) =>{
 let body_index  = weight / (height * height)
    if (body_index <= 18.5) {
        return ('Underweight' + body_index );
    } else if (body_index <= 24.9 && BMI > 18.5) {
        return(body_index +  'Normal weight');
    } else if (body_index > 24.9 && BMI <= 29.9) {
        return(body_index + 'Overweight');
    } else if (body_index > 29.9) {
        return (' Obese ' + body_index);
    }
}

console.log('BMI', BMI(98, 1.77));



// Write a function called checkSeason,
// it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const autumn_months = ['september', 'october', 'november'];
const winter_months = ['december', 'january', 'february'];
const spring_months = ['march', 'april', 'may'];
const summer_months = ['june', 'july', 'august']


const checkSeason = (month)=>{
    if (autumn_months.includes(month)) {
        return('Season is Autumn');
    } else if (winter_months.includes(month)) {
        return('Season is Winter');
    } else if (spring_months.includes(month)) {
        return('Season is Spring');
    } else if (summer_months.includes(month)) {
        return('Season is Summer');
    }
}

console.log('check season', checkSeason('january'))

