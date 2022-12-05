const btn = document.querySelector('button');
const paintDiv = document.querySelector('.paint');
const input = document.querySelector('input');


btn.addEventListener('click', () => {
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    input.value = '#'+randomColor;
    paintDiv.style.backgroundColor = '#'+randomColor;
});

input.addEventListener('keyup', () => {
    paintDiv.style.backgroundColor = input.value;
})