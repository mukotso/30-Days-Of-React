const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


// Find the person who has many skills in the users object.

// Count logged in users

//get users in key and value pairs
let users_as_array = Object.entries(users);
let logged_in_users_array = users_as_array.filter(([key, value]) => value.isLoggedIn === true)

// Convert the key/value array back to an object:`
// const logged_in_users_object = Object.fromEntries(logged_in_users_array);

console.log('logged_in_users_count',logged_in_users_array.length)

// count users having greater than equal to 50 points from the following object.
let users_with_more_than_50_points = users_as_array.filter(([key, value]) => value.points >= 50)
console.log('users_with_more_than_50_points',users_with_more_than_50_points.length);


// Find people who are MERN stack developer from the users object
let MERN_developers = users_as_array.filter(([key, value]) => value.skills.includes('MongoDB', 'Express', 'React', 'Node') )
console.log('MERN_developers',MERN_developers);

// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object
console.log('user object keys',Object.keys(users));

// Get all the values of users object
console.log('user object values',Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.