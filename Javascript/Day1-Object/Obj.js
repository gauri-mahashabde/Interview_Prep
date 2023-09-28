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

