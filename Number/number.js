//Numbers
//Loosely Typed = don't declare type


const number = 5;
let pants = 2.666;
pants = 'are great';
console.log(number);
console.log(pants);

const numb = 2.6373;
const nbr = '45678';
console.log(numb);
console.log(nbr);


 const add = number + numb;
 const sub = number - numb;
 const multipl = number * numb;
 const divis = number / numb;
 const modulo = number % numb;

 console.log(add);
 console.log(sub);
 console.log(multipl);
 console.log(divis);
 console.log(modulo);

let num = 40;
num += 5;
num += 5;
num += 5;
num += 5;
num += 5;
num -= 5;

num++;
console.log(num);

const slices = 10;
const children = 4;
const amount = slices % children;
console.log(amount);

const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;

console.log(random);
console.log(random2);

//IMPLICIT TYPE CONVERSION
const valu = firstName - lastName
console.log(valu);

let number3 = '10';
let number4 = '23';
const result = number3 - number4; // Will get a number as a resul
console.log(typeof result +' ' + result);// Will get a number as a resul

let number5 = '10';
let number6 = '23';
const result2 = number5 + number6; // Will get a number as a resul
console.log(typeof result2 +' ' + result2);// Will get a string as a resul because, javascript will think, we are trying to concatenate.

const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();
    let val = document.getElementById('amount').value;
    val = parseInt(val);
    console.log('Input value Type');
    console.log(val);
    console.log('Sum of Two Values');
    console.log(randomNumber + val);
    
})
