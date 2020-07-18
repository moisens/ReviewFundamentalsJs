//DOM : Document Object Model
//In the DOM each element is an object

//window object = broser api
//document
//console.dir
console.dir(document);

//Select the element or group  of elements that we want
//Decide the effect we want to apply to the selection

const h1 = document.getElementById('title');
h1.style.color = 'red';

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue';
btn.style.color = '#fff';
btn.style.border = 'none';

console.log('------getElementsByTagName----------');
//getElementsByTagName('tagname');
const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
console.log(headings.length);

const items = document.getElementsByTagName('li');
// items.forEach(function(item){
//     console.log(item);
// }) => It'll thow an error even though we have arr. We can't use forEach on a nodelist

items[2].style.color = 'orange'
const betterItems = [...items]
console.log(items);
console.log(betterItems); //Transform the node List into an array => so we can use forEach
betterItems.forEach((item) =>{
    console.log(item);
});

console.log('---------getElementByClassName--------');
//getElementByClassName
//node-list = array-like object
//index, length property but not array methods

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'blue';


console.log('--------querySelector & ...all------');
//querySelector('any css) - selects single
//querySelectorall('any css) - selects all - can use forEach
const result = document.querySelector('#result');
result.style.backgroundColor = 'lightgrey';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

lists = document.querySelectorAll('.special');

lists.forEach((list) =>{
    list.style.color = 'yellow'
    console.log(list);
})


console.log('-----childNodes-------');


