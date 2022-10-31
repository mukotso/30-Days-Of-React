// Create an Animal class.
// The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getAnimalDetails() {
      return this.name + ' of age ' + this.age + ' and color ' + this.color

    }
}
// Create a Dog and Cat child class from the Animal Class.

class Cat extends Animal {
    barking() {
        console.log('muewwwwww')
    }
}

class Dog extends Animal {
    barking() {
        console.log('wo wo wo')
    }
}