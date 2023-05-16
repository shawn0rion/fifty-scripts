const button = document.querySelector('.nav-button');
const navbar = document.querySelector('.navbar');
button.addEventListener('click', event => {
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');   
    } else{
        navbar.classList.add('active');
    }
})