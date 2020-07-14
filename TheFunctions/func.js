//function
function hello(name){
    console.log(`Hello there ${name}`);
    
}
hello('Amanda')
hello('Bob')
hello('Helene')


//Return
//Calculate width and height

//1 inch = 2.54cm
const wallHeight = 80;
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);


function calculate(val){
    const newValue = val * 2.54
    console.log(`The value in cm is: ${val * 2.54}cm`);
    return newValue;
}


//function definion/declaration
function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12,34);

//function expression
const added = function (num1, num2){
    return num1 + num2;
}
const thirdValue = added(5,6)

const values = [firstValue, secondValue, thirdValue]
console.log(values);
