//allows select dynamic element
//event propagation - order the events are fired
//event bubbling - clicked element first then bubbles up -- default
//event capturing - fires at the root and and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

//Event Bubbling
function showBubbling(e){
    console.log('current target', e.currentTarget);
    //console.log('target', e.target);
    // if(e.target.classList.contains('link')){
    //     console.log('You clicked on the link!');
    // }
}

//We can prevent the default  bubbling
// function stopPropagation(e){
//     console.log('you clicked on the LIST');
//     e.stopPropagation();
    
// }

list.addEventListener('click', showBubbling, {capture: true});
// list.addEventListener('click', stopPropagation);
container.addEventListener('click', showBubbling, {capture: true});



const containers = document.querySelector('.containers');
const btn = document.querySelector('.btn');
//const heading = document.querySelector('.heading');
//console.log(heading)

 
 function sayHello(){
     console.log('hello little fella');
 }
 //heading.addEventListener('click', sayHello);

 

 function createElementOnClick(){
     const h1 = document.createElement('h1')
     h1.classList.add('heading')
     h1.textContent = 'I\'m inside the container'; //appendChild(document.createTextNode('i\'m the seconds h1'));
     containers.appendChild(h1)
     console.log(containers);

 }
 btn.addEventListener('click', createElementOnClick);

 containers.addEventListener('click', getDynamicElement);
 function getDynamicElement(e){
     if(e.target.classList.contains('heading')){
         console.log('hello there');
     }
 }