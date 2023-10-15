//callback
/*A callback function is a function in JavaScript that is called (or invoked) by the first function after the first function has completed its task. It’s a function that receives input from another function. 
They are often used to handle asynchronous events and make your code more readable. 
Importance
They allow you to handle events
You can use them to send asynchronous API calls
You can use them to enhance your code’s performance
Callback functions can be used to manage the flow of asynchronous operations, preventing the infamous “callback hell.” 
Closures, which allow functions to “remember” the scope in which they were generated, are frequently used by callback functions.
Higher-order functions, or functions that can take other functions as inputs or return other functions as values, are based on the concept of callbacks. 
Use
Update the UI after a network request has completed.
Process data after a file has been read.
Make another API call after the results of the first API call have been received.*/

//syntax
var func1 = function()
{
    //Body
}

var func2 = function(callback) 
{
    //Body
    callback()
}

func2(func1);

//example 1
var x = function() 
{
    console.log("Called From Within A Function")
}

var y = function(callB)
{
    console.log('The Callback Function')
    callB()
}

y(x);

//Asynchronous JS
/*Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.
Making HTTP requests using fetch()
Accessing a user's camera or microphone using getUserMedia()
Asking a user to select files using showOpenFilePicker()*/

//Example

let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function(){
    console.log("Asynchronous");
}, 10000)
console.log(greet_two);

//promise
/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
Pending: Your one month is not completed yet, hence, you are not sure whether your promise will be fulfilled or not.

Fulfilled: You successfully finished learning JavaScript in one month.

Rejected: You failed in fulfilling the promise.*/

//Example
function getSumNum(a, b) {
  const customPromise = new Promise((resolve, reject) => {
    const sum = a + b;

    if(sum <= 5){
      resolve("Let's go!!")
    } else {
      reject(new Error('Oops!.. Number must be less than 5'))
    }
  })

  return customPromise
}

// consuming the promise
getSumNum(1, 3).then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})

//Async and await


function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}
 
async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}
 
display();