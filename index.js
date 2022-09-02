const button = document.querySelector('button.greeting');
const heading = document.querySelector('h1#_second_');

function changeText(ev){
    const textInput = document.querySelector('#input-text');
    ev.target.textContent = 'Clickity click'
    heading.textContent = textInput.value;
}

button.addEventListener('click', changeText);

