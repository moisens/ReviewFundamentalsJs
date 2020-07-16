//Arrays and loop
console.log('------Array---for----loop----');

const someNames = ['Sam', 'Helene', 'Amanda'];
const theLastName = 'Magnus';
let newArray = [];

for(let i=0; i<someNames.length; i++){
    newArray.push(`${someNames[i]} ${theLastName}`)
}
console.table(newArray);



console.log('--function--return--if--arrays--for--loop');


const gas =[20,40,100,30];
const food = [10,40,50];

function calculateAll(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i]
    }
    if(total > 100){
        console.log(`What!, You're spending too much`);
        return total;  
    }else{
        console.log(`You are good, total is less than 100`);
    }
        
    return total;
}
const gasTotal = calculateAll(gas);
const foodTotal = calculateAll(food);
const radomTotal = calculateAll([200, 400, 600, 100]);

console.log({
    gas: gasTotal, 
    food: foodTotal, 
    radom: radomTotal
});


console.log('------ ----- ----- ---- ---- --');

//Refernce VS Value
//Primitive data types
//String, number, symbol, booleean, undefined, null
//Arrays, functions, Objects = object typeof

//When assigning primitive data type value to a variable, any changes are made directly
//to that valeurs, without affecting original value.

//When assigning a non-primitive data type value to a variable is
//done by reference so any changes will affect all the references.

//values Vs Reference
const numbr = 1;
let numbr2 = numbr;
numbr2 = 7
console.log(`The first value is ${numbr}`);
console.log(`the second value is ${numbr2}`);


let persons = {
    name: 'Sian'
}

let persons2 = {...persons};//Using a copie instead of a reference will prevent the reassignment of the first variable
persons2.name = 'Sam';

console.log(`The name of the first person is ${persons.name}`);
console.log(`The name of the second person is ${persons2.name}`);


//Null & Undefined
//both represent no value

//Undefined: JS can't find a value for this.

//variable without 
//missing function arguments
//missing object properties

//null - 'developer sets the value'

let hetNumber = 20 + null //20 + 0
 console.log(hetNumber);

 let hetNumber2 = 20 + undefined // 20 + 0
 console.log(hetNumber2);


 //Truthy and falsy
 //"", '', 0, -0, NaN, false, null, undefined are evaluate to falsy

 const bool1 = true;
 const bool2 = 2 > 1;

 if(bool1){
     console.log('It works');
 }
 if(bool2){
     console.log('It also works');
 }

 console.log('---- ---- --- ---- ---- ');

 const oneText = 'toutou';

 if(oneText){
    console.log('hey the value Thruthy');
 }else{
     console.log('hey the value Falsy');
 }


console.log('------  ----- ------');

//Unary operator -> typeof
let texto = 'some text';
console.log('texto is a: ' + typeof texto);

//Binary operator ->assignment
let numb1 = 3;
let numb2 = 2 + 5;

//Trenary operator
//condition ? (run if true) : (run if false)

let vall = 1 < 0;

 if(vall){
         console.log('the value is true');
 }else{
     console.log('the value is false');
 }

 console.log('------ ----- ----- ----- ----- ');
vall ? console.log('The vall is true') : console.log('The vall is false')
 

console.log('------ ----- ----- ----- ----- ');
