const button = document.querySelector('input[type="button"]');
const heading = document.querySelector('h1#_second_');
const textInput = document.querySelector('#input-text');

button.addEventListener('click', (ev)=>{
    if(textInput.value !== ''){
        heading.textContent = textInput.value;   
        ev.target.value = 'Clickity click';
    }else{
        alert('Type something inside the text form...');
    }
});

