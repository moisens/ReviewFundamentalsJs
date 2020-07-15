//loops
//repeatedly run a block of code while condition is true
//While loop

console.log('-------------------------------------');

//While loop
// const amount = 10; --Here const will throw an Uncaught TypeError: Assignment to constant variable.
let amounts = 10;


while(amounts > 0){
    console.log(`Ihave ${amounts}$ dollars and I am going to the mall`);
    amounts--;
}
console.log('---------    --------    ----');
//do while loop
let money = 0;

do{
    console.log(`You have ${money}$ dollars`);
    money++;
    
}while(money < 10);

console.log('---------    --------    ----');

//for loop
for(let i=0; i<10; i++){
    console.log(`and the number is ${i}`);
    
}

console.log('---------    --------    ----'); 
for(let numms=11; numms>=0; numms--){
    console.log(`and the number is ${numms}`);
    
}

