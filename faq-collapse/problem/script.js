const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', event => {
        const answer = question.parentElement.querySelector('.answer');
        if (answer.classList.contains('active')){
            answer.classList.remove('active');
        } else{
            answer.classList.add('active');
        }
    })
})