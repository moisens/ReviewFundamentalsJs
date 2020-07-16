console.log('-------- --- -----------');
//Callback Functions, Higher Order Functions, Function as 
//First Class Objects

//Functions are first class objects - stored in a variable
//(expression), passed as an argument to another function, return
//from the function (closure)

//Higher Order function - accepts another function as an argument
//or returns another function as a result.

//Callback function - passed to a another function as an argument and 
//executed inside that function.


//Callback Function
function morning(name){
    return `Good morning ${name.toUpperCase()}`;
}

function evening(name){
    return `Good evening ${name.toUpperCase()}`;
}

//This is the higher order function which accept the callback func
function greet(name, callb){
    const myName = 'Rodney';
    console.log(` ${callb(name)}, my name is ${myName}`);
}

greet('Sam', morning);
greet('Daniel', evening);
