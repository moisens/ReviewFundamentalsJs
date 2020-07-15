//Array Properties and Methods
let zenames = ['Sam', 'Helene', 'Zoé', 'Ben']
console.table(zenames);
//length
console.log(zenames.length);
console.log(zenames[zenames.length-1]);

//concat
const lastname = ['Carter', 'Magnus', 'Ludingthon', 'Hardy'];
const fullyName = zenames.concat(lastname);

console.table(fullyName);
console.log(fullyName);

//reversing arr
console.log(fullyName.reverse());

//Unshift
fullyName.unshift('Fish')
fullyName.unshift('Cage')
console.table([fullyName]);

//shift
fullyName.shift();
fullyName.shift();
console.table([fullyName]);

 //push
 fullyName.push('Cage')
 console.table([fullyName])
 //pop
//  fullyName.pop()
//  fullyName.pop()
 console.table(fullyName);
//splice - mutates original array
const specificNames = fullyName.splice(1,3)
console.table(specificNames)


