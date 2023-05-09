// for each key press, update text for each box
// use the title of the parent node as a key to access the keypress event
const boxes = document.querySelectorAll('.box');
document.addEventListener('keydown', event => {
    console.log(event);
    boxes.forEach(box => {
        const prop = box.parentElement.querySelector('.title').textContent.slice(6);
        box.textContent = event[prop];
    })
})
