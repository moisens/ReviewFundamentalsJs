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
//headings[0].style.color = 'red';
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
//childNodes - returns all the childNodes including whitespace
//witch is treated as a text node. 

//children
//firstChild
//lastChild

const results = document.querySelector('#results')
const allchildren = results.childNodes;
console.log(allchildren);//will retuns all, textNodes + children

const children = results.children;
console.log(children);

console.log(results.firstChild)
console.log(results.firstElementChild);
console.log(results.lastChild);
console.log(results.lastElementChild); 

console.log('----------parent element--------');
//parent element
const heading = document.querySelector('h2')
console.log(heading.parentElement.parentElement);
const parent = heading.parentElement;

parent.style.color = 'blue';


console.log('----------prev, next sibling-------');

//prev sibling
//next sibling
//return whitespace

const first = document.querySelector('.first');
const last = document.querySelector('#last')

const second = first.nextSibling;//will return a textNode
const second1 = first.nextSibling.nextSibling.style.color = 'red';
console.log(second);

const third = last.previousSibling.previousSibling
console.log(third);

console.log(last.nextSibling.nextSibling);//If u try to access the next sibling of the last elem, you'll get null
console.log('--------nextElementSibling---------');

//nextElementSibling
first.nextElementSibling.style.backgroundColor = 'lightblue';
last.previousElementSibling.style.color = 'orange'
console.log(last.previousElementSibling);

console.log('---------node value-------------');

//node Value
const special = document.getElementById('special');
const val = special.nodeValue;
console.log(val);//We get null , need to use choldNodes
console.log(special.childNodes[0].nodeValue);
//or
console.log(special.firstChild.nodeValue);

console.log('----textContent-------');
//textContent
const easyValue = special.textContent;
console.log(easyValue);


console.log('--------Get Attribute---Set Attribute-----');
//get Attribute()
const firstt = document.querySelector('.firstt');
const classVal = firstt.getAttribute('id');
console.log(classVal);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);


//set Attribute()





const links = document.querySelectorAll('.firstt');
console.log(links);


