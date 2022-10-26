// Exercises: Level 1
// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object.
dog.legs = 4;
dog.color = 'red';
dog.age = 23;
dog.bark = function () {
    return 'woof woof'
};
// The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
const dog_values=Object.values(dog)
console.log(dog_values)
// Set new properties the dog object: breed, getDogInfo
dog.breed='chinchilla';
dog.getDogInfo = function (){
    return `I am a dog of ${this.age} years , color ${this.color}, and  ${this.legs}legs.`
}

console.log(dog);