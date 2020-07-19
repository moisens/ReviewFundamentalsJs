//createElement('element')
//textNode('text content')
//element.appendChild(childElement);

//insertBefore('element', 'location')


const result = document.querySelector('#result');
const first = document.querySelector('.red');
//Create emepty element
const bodyDiv = document.createElement('div');
//Create text node
 const text = document.createTextNode('a simple body div');
 bodyDiv.appendChild(text);
 //document.body.appendChild(bodyDiv);
 document.body.insertBefore(bodyDiv, result)
//result element

 const heading = document.createElement('h2');
 const headingText = document.createTextNode('dynamic heading');
 heading.appendChild(headingText);
 heading.classList.add('blue');
 //result.appendChild(heading);
result.insertBefore(heading, first)


//replaceChild('new', 'old')
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i'am a small heading`)
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv)

 console.log(result.children);


 //prepend
 //innerText
const heading1 = document.createElement('h2');
heading1.innerText = `i'am a dynamic heading 2`;
document.body.prepend(heading1);

//remove
//removeChild

const resultat = document.querySelector('#resultat');
//resultat.remove();

const heading2 = resultat.querySelector('h4');
resultat.removeChild(heading2)
console.log(heading2);


//innerHTML
//textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVal = 'Radom Value'
const ul = document.createElement('ul');
ul.innerHTML = `
    <li class="item">${randomVal}</li>
    <li>list item</li>
    <li class="item">${randomVal}</li>
    <li>list item</li>
`;

document.body.appendChild(ul);

div.textContent = 'Hello world';
div.innerHTML = 'Hello people';

document.write('------carrefull---');
//When dynamically adding text in the doc, use innerHtml, textcontent will return in this case a html tag + the content
ul.textContent = `
    <li class="item">${randomVal}</li>
    <li>list item</li>
    <li class="item">${randomVal}</li>
    <li>list item</li>
`;


//CSS
const random = document.querySelector('.random');
// random.style.backgroundColor = 'blue';
// random.style.color = '#fff';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

//Better way
random.classList.add('title')




console.log(random.style);