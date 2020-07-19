//select element
//addEventListener
//what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2')

btn.addEventListener('click', changeColor);

function changeColor(){
    if(heading.classList.contains('red')){
        heading.classList.remove('red');
    }else{
        heading.classList.add('red');
    }
}


