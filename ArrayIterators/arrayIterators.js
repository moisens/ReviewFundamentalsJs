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
    {name: 'Bob', age: 20, position: 'developer', id:1},
    {name: 'Peter', age: 25, position: 'designer', id:2},
    {name: 'Suzy', age: 38, position: 'the boss', id:3},
    {name: 'anna', age: 39, position: 'the boss2', id:4}
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
        firstname: people.name.toUpperCase(),
        age: people.age + 20,
        position: people.position.toUpperCase()
    }
});

const nammes = peoples.map((people) =>{
    return `<h1>${people.name}</h1>`;
});

document.body.innerHTML = nammes.join('')


console.log(aGes);
console.table(newpeoples);
console.log(nammes);


console.log('--------filter--------');
//filter
//return a new array
//can manipulate the size of new array
//returns based on condition

const youngPeople = peoples.filter((people) =>{
    return people.age <= 25;
});

const dev = peoples.filter((people) =>{
    return people.position === 'developer';
})

console.table(youngPeople);
console.table(dev);


console.log('------------find----------');

//find 
//returns singler instance - (in this case object)
//return s first match, if no match undefined
//great for getting unique value

const lesPrenoms = ['Bob', 'Peter', 'Suzy']

const unePersonne = lesPrenoms.find((lePrenom) =>{
    return lePrenom === 'Bob'
});


const persona = peoples.find((people) =>{
    return people.id === 3
});
//diff between filter and find, filter retun an arr find return an object
const persona2 = peoples.filter((people) =>{
    return people.id === 3
});

console.log(unePersonne);
console.log(persona.name);//Object
console.log(persona2[0].name);//Array
