const n = 4;
function generateSteps(numSteps){
    const stepsRow = document.querySelector('#steps');
    for (let i = 0; i < numSteps; i++){
        const step = document.createElement('div');
        step.classList.add('step');
        step.textContent = i + 1;

        if (i < 1){
            step.classList.add('progress')
        }
        stepsRow.appendChild(step);
    }
}

generateSteps(n);

function stepProgress(event){
    const steps = document.querySelectorAll('.step')
    const activeSteps = document.querySelectorAll('.step.progress')
    if (event.currentTarget.id === 'prev'){
        steps[activeSteps.length - 1].classList.remove('progress');
    } else{
        steps[activeSteps.length].classList.add('progress');
    }
    // reset length after add or remove progress
    handleButtonRange();
}

function handleButtonRange(){
    const steps = document.querySelectorAll('.step')
    const activeSteps = document.querySelectorAll('.step.progress')
    if (activeSteps.length === steps.length){
        document.querySelector('#next').setAttribute('disabled', true);
        document.querySelector('#next').classList.add('disabled');
    } else {
        document.querySelector('#next').removeAttribute('disabled');
        document.querySelector('#next').classList.remove('disabled');
    }

    if (activeSteps.length === 1){ 
        document.querySelector('#prev').setAttribute('disabled', true);
        document.querySelector('#prev').classList.add('disabled');
    } else {
        document.querySelector('#prev').removeAttribute('disabled');
        document.querySelector('#prev').classList.remove('disabled');
    }
}

handleButtonRange();
document.querySelector('#prev').addEventListener('click', stepProgress);
document.querySelector("#next").addEventListener('click', stepProgress);
