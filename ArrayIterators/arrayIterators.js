//Powerfull Array Methods
//forEach, map, filter, find, reduce
//Iterate over array - no for loo required
//Accept Callback function as an argument, 
//calls callback against each item in a array. Reference Item
//in the callback parameter.


const nombers = [0,1,2,3,4];

//show all numbers
for(let i=0; i<nombers.length; i++){
    console.log(nombers[i]);
}

console.log('-------forEach--------');
//forEach does not return a new array
const peoples = [
    {name: 'Bob', age: 20, position: 'developer'},
    {name: 'Peter', age: 25, position: 'designer'},
    {name: 'Suzy', age: 38, position: 'the boss'},
    {name: 'anna', age: 39, position: 'the boss2'}
]

// function showPerson(person){
//     console.log(person);
// }

// peoples.forEach(showPerson);

peoples.forEach((people) =>{
    console.log(people.position.toLocaleUpperCase());
});


//map
console.log('---- ---- map ---- ---');
//map return a new array but don't modify the size of the original arr


const aGes = peoples.map((people) =>{
    return people.age + 20;
});


const newpeoples = peoples.map((people) =>{
    return {
        firstname: people.name.toLocaleUpperCase(),
        age: people.age + 20,
        position: people.position.toLocaleUpperCase()
    }
});

const nammes = peoples.map((people) =>{
    return `<h1>${people.name}</h1>`;
});

document.body.innerHTML = nammes.join('')


console.log(aGes);
console.log(newpeoples);
console.log(nammes);