// Inject data to JSX
// Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
const string = 'James Bond'
const number = 14
const boolean = true
const array = [1, 2, 3, 4]
const object = {test1: 'test1', test2: 'test2', test3: 'test3'}

const example = <div>
    <h1>name: {string}</h1>
    <h1>age: {number}</h1>
    <h1>circumcised: {boolean}</h1>
    count: {array.map(value => <li key={value}>{value}</li>)}
    test : {object.test1}, {object.test2}, {object.test3}
</div>