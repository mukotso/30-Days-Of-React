// Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome,
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


const personAccount = {
    firstName: '',
    lastName: '',
    incomes: {
        'name': '',
        description: '',
    },
    expenses: {
        'name': '',
        description: '',
    },
    totalIncome: function () {

    },
    totalExpense: function () {

    },
    accountInfo: function () {

    },
    addIncome: function () {

    },
    addExpense: function () {

    },
    accountBalance: function () {

    }

}


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

// Create a function called signIn which allows user to sign in to the application
const userDetails = {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas2334@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
}
signIn(userDetails)

function signIn(userDetails) {
    let user_exists = users.filter(user => {
        return user.email === userDetails.email
    });

    if (user_exists.length > 0) {
        console.log('user already exists')
    } else {
        users.push(userDetails)
        console.log('user-logged successfully')
    }
}


const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            {userId: 'fg12cy', rate: 5},
            {userId: 'zwf8md', rate: 4.5},
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{userId: 'fg12cy', rate: 5}],
        likes: ['fg12cy'],
    },
]
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product

console.log('rateProduct which rates the product', rateProduct(products[0]));

function rateProduct(product) {
    let sum_rating = 0;
    product.ratings.forEach(productRating => {
        sum_rating += parseInt(productRating.rate)
    })
    return sum_rating
}

// b. Create a function called averageRating which calculate the average rating of a product


console.log('averageRating which rates the product', averageRating(products[0]));

function averageRating(product) {
    let sum_rating = 0;
    product.ratings.forEach(productRating => {
        sum_rating += parseInt(productRating.rate)
    })
    return sum_rating / product.ratings.length;
}

// Create a function called likeProduct.
// This function will helps to like to the product if it is not liked and remove like if it was liked

console.log('likeProduct', likeProduct(products[0]));

function likeProduct(product) {
    return product.likes.length > 0 ? product.likes = [] : product.likes = ['liked']
}
