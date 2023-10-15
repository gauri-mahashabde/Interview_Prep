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