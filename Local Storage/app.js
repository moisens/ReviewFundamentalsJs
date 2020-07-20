//Web storage api - provided by web browser
//session storage, local storage
//setItem, getItem, removeItem, clear

//localStorage.setItem('name', 'Stewie');
//sessionStorage.setItem('name', 'Stewie');

localStorage.setItem('name', 'Pauline');
localStorage.setItem('autreNom', 'Susan');
localStorage.setItem('job', 'developer');
localStorage.setItem('adress', 'av.deMars 4');

const name = localStorage.getItem('name');
localStorage.removeItem('name')
const otherName = localStorage.getItem('name');
console.log(otherName);//null

localStorage.clear()

//JSON.srtingfy(), JSON.parse()

const friends = ['peter', 'quagmire', 'clevland'];
localStorage.setItem('friends', JSON.stringify(friends));
//accessing the value -> always parse
const values = JSON.parse(localStorage.getItem('friends'))
console.log(values[1]);

let fruit;
if(localStorage.getItem('fruit')){
    fruit = JSON.parse(localStorage.getItem('fruit'));
}else{
    // if doesn't exist
    fruit = [];
}
console.log(fruit);
//fruit.push('apple');
fruit.push('orange');
localStorage.setItem('fruit', JSON.stringify(fruit));