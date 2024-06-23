// Prototype contains all properties and functions that are common between similar type of objects
// obj.__proto__ is used to access the prototype of a object that is created (reference)
// Array.prototype is used to access the prototype of a data type (actual object)
// console.log(Array.prototype);

// Factory Functions
// A function that creates objects

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi my name is ${this.name}`);
//         }
//     };
//     return person;
// };

// obj = PersonMaker('Akash', 20);
// obj.talk();
// factory function creates a memory space to store every property and function for each object separately

// There is a better alternative to factory functions which is new operator
// New Operator
// It lets create a instance of a user defined object type that has a constructor function
// Constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new Person('Adam', 25);
// console.log(p1);
// new keyword creates a blank object
// then passes the object to the constructor
// The associated prototype to the constructor are available for this object with same memory space for functions

// Class
// Template for creating objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

// Inheritance
// It is a mechanism that allows to create new classes on the basis of existing classes
// we can create a Student class that has marks property added to the Person class

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    };
};
