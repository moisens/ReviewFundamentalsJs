//Arrays and loop
console.log('------Array---for----loop----');

const someNames = ['Sam', 'Helene', 'Amanda'];
const theLastName = 'Magnus';
let newArray = [];

for(let i=0; i<someNames.length; i++){
    newArray.push(`${someNames[i]} ${theLastName}`)
}
console.table(newArray);


