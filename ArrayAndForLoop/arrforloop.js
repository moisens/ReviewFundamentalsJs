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


console.log('--');


