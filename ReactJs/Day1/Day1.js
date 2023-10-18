/*
What is react ?
=>React is  a open source javascript library used to develope complex and interactive web and mobile UI.
=>Developer primarily use react to create single page applications and the library focuses solely on the view layer of MVC.*/

What are the main features of react?
JSX (JavaScript Syntax Extension)
Virtual DOM
One-way data binding
Performance
Extensions
Conditional statements
Components
Simplicity  

What is Redux?
Redux is a predictable state conatiner for javascript apps.
It can be used with any library React , angular , Vue or vanilla Js.
React-redux is a library that provides binding to use React and Redux together in an application.
Three core concepts of React
=>Store - That holds the state of your application
=>Action - That describes the changes in the state of the application
=>reducer -Which carries out the state transition depending on the action.
Three core principles of redux
1.The state of your whole application is stored in an object tree within a single store.
Maintain our application state in a single object which would be managed by the redux store.
2.The only way to change the state is to emit an action , an object describing what happened.
To update the state of your app, you need to let redux know about that with an action.
3.To specify how the state tree is transformed by actions , you write pure reducer(pure function).
-Action is a object with type property and action creator is a function which returns the action.
-Reducer is a function that accepts state and action as arguments , and returns the next state of application.
-store - There is just one store for entier application
-Holds application state 
-Allows access to state via getState()
-Allow state to be updated via dispatch(action)
-registers listeners via subscribe(listener)
-handles unregistering of listeners via the function returned by subscribe(listner)


