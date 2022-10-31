// Create a function called getPersonInfo.
// The getPersonInfo function takes an object parameter.
// The structure of the object and the output of the function is given below.
// Try to use both a regular way and destructuring and compare the cleanness of the code.
// If you want to compare your solution with my solution, check this link.

function getPersonInfo(personDetails) {
    const {firstName, lastName, age, country, job,
        skills: [skill1,skill2,skill3,skill4,skill5],
        languages: [language1,language2,language3]}
            = personDetails;

    return `${firstName} ${lastName} lives in ${country}. He is  ${age} years old. He is an ${job}. He teaches ${skill1}, ${skill2},${skill3},${skill4},${skill5}. He speaks ${language1}, ${language2},${language3}`
}
// Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

console.log('getPersonInfo', getPersonInfo(person))