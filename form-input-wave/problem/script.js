const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

emailInput.addEventListener('focus', (e) => slider(e, '.email-placeholder'))
emailInput.addEventListener('blur', (e) => { 
    slider(e, '.email-placeholder')
    if (e.target.value.length === 0){
        e.target.classList.remove('active');
    }
})
passwordInput.addEventListener('focus', (e) => slider(e, '.password-placeholder'))
passwordInput.addEventListener('blur', (e) => { 
    slider(e, '.password-placeholder')
    if (e.target.value.length === 0){
        e.target.classList.remove('active');
    }
})
function slider(event, className){
    console.log(event.target)
    if (event.target.value.length > 0){
        return;
    }

    event.target.classList.add('active');
    const letters = document.querySelectorAll(className);
    let i = 0;
    const delayMultiplier = 50;
    letters.forEach(letter => {

            setTimeout(() => {
                if (letter.classList.contains('slide-up')){
                    letter.classList.remove('slide-up')
                    letter.classList.remove('active')
                } else{
                    letter.classList.add('slide-up')
                    letter.classList.add('active')
                }
            }, i * delayMultiplier)
            i++;
        }
    )
}