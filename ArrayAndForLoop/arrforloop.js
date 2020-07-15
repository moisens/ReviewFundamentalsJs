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



