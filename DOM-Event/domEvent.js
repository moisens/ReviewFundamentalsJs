//select element
//addEventListener
//what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2')

btn.addEventListener('click', changeColor);

function changeColor(){
    if(heading.classList.contains('blue')){
        heading.classList.remove('blue');
    }else{
        heading.classList.add('blue');
    }
}


//click - fires after ful action occurs
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - move out of an element

const headin = document.querySelector('h1');
const btnFires = document.querySelector('.btn-fires')

btnFires.addEventListener('click', function(){
    console.log('you clicked');
});

btnFires.addEventListener('mousedown', function(){
    console.log('down');
});

btnFires.addEventListener('mouseup', function(){
    console.log('up');
});


headin.addEventListener('mouseenter', function(){
    headin.classList.add('red')
});

headin.addEventListener('mouseleave', function(){
    headin.classList.remove('red');
});


//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released

 const nameInput = document.querySelector('#name');

// nameInput.addEventListener('keypress', function(){
//     console.log(nameInput.value);
// });

// nameInput.addEventListener('keydown', function(){
//     console.log(nameInput.value);
// });

nameInput.addEventListener('keyup', function(){
    console.log(nameInput.value);
});