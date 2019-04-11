class Cat {
  constructor(name) {
    this.name = name
  }
  speak(){
    return (this.name + ' says meow!')
  }
}

class Dog {
  constructor(name) {
    this.name = name
  }
  speak(){
    return (`${this.name} says woof!`)
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
    // bird's sex is male
  }
  // the function needs to be called inside of the class method so that it can be associated. If another class was to call the same function, it wouldn't apply UNLESS it is inside of that class method.

  speak(){
    if (this.sex === "male") {
      return (`It's me! ${this.name}, the parrot!`)
} else {
    return `${this.name} says squawk!`
  }
// i'm only able to call on it bcuase it's a instance method
  //   2) bird2.speak() returns 'Squawk!'
  // *** if i put "static" in front, it becomes a class method
  }
}



// arrow function
// ***
