//Objects - key/value pairs methods
//dot notation

//Object are collections of properties , the property are refers as key

const person = {
    name: 'john',
    lastname: 'peters',
    age: 40,
    education: false,
    married: true,
    siblings: ['anna', 'susan', 'peter'],
    greeting: function(){
        console.log('Hello my name is John');
        
    }
}

const age = person.age;
console.log(age);
person.name = 'Bob';

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();


