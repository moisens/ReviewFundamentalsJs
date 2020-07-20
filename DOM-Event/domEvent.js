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



//event object argument e,evt
//info about triggered event
//event.type
//event.currentTarget
//this heyword
//preventDefault() - prevents default behaviour


const someHeding = document.querySelector('.someHeding');
const link  = document.querySelector('#link');
const btnEvent = document.querySelector('.btn-event');
//event.currentTarget
someHeding.addEventListener('click', function(e){
    console.log(e.currentTarget);
    console.log(this);
});

btnEvent.addEventListener('click', function(e){
    e.currentTarget.classList.add('blue');
});

//event.type
btnEvent.addEventListener('click', function(e){
    console.log(e.type);
});

link.addEventListener('click', linkScroll)
function linkScroll(e){
    //preventDefault
    e.preventDefault();
}


//currentTarget - always refers to the element to which the event handle has been attached to
//target - identifies the element  on wich the event occured

const btns = document.querySelectorAll('.btns');

btns.forEach((btn) =>{
    btn.addEventListener('click', addColor);

    function addColor(e){
        console.log('target', e.currentTarget);
        e.currentTarget.style.color = 'lightblue';
        console.log('target',e.target);
        e.target.style.color = 'black';
    }
})

