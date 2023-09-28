//JS Objacts
//An object is a collection of properties, where each property is a key-value pair
//object creation - object literal
let employee = {
    id : 101,
    name1 : "Gauri",
    designation : "Software Engineer"
}

console.log(employee);

//access the property of a object

console.log(employee.id);
console.log(employee.name1);

//add a new property to the object

employee.domain = "tech";

console.log(employee);

//remove a property

delete employee.domain;
console.log(employee);

//check if the object has that property 

console.log(employee.hasOwnProperty("name"));
console.log(employee.hasOwnProperty("name1"));

//loop through an object

let students = {
    roll:101,
    id : "xyz",
    sub:{
        science:99,
        maths:56,
    }
}

for (let property in students){
    console.log(`${property}:${students[property]}`)
}

//constructor function
//A constructor function is a function that is used to create new objects with the same properties and methods.

//Creation

function Person (name , age){
    this.name = name;
    this.age = age;
}

let person1 =  new Person("Gauri" , 24);
let person2 =new Person("chaitre" , 20);
let person3 =  new Person("joy" , 45);

console.log(person1);
console.log(person2);
console.log(person3);

//prototypal inheritance 
//Prototypal inheritance is a way of creating new objects based on an existing object.
// The new object inherits the properties and methods of the existing object.
//creation
let him = {
    nam :"john",
    age:30,
    greet:function(){
            console.log("Hello ")
    }   
}

let employeer = Object.create(him);
employeer.jobtitle = 'software Developer'

console.log(him);
