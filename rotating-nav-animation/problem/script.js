const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const nav = document.querySelector('nav');
const list = document.querySelector('nav > ul');

openButton.addEventListener('click', () => {
    toggleClasses()
});

closeButton.addEventListener('click', () => {
    toggleClasses()
});

function toggleClasses(){
    circle.classList.toggle('rotate');
    container.classList.toggle('rotate-article')
    list.classList.toggle('show')

}
