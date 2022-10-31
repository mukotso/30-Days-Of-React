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

class Cat extends Animal {
    barking() {
        console.log('muewwwwww')
    }
    //method overriding
    getAnimalDetails(){
        return this.name +' and color ' + this.color

    }
}