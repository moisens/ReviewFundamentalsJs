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


