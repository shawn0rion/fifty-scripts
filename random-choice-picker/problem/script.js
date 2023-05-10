const iterations = 15;
const ms = 3000;
const textBox = document.querySelector('.text-box');
const rngButton = document.querySelector('.rng-button');
rngButton.addEventListener('click', () => {
    clearChoices();
    const input = textBox.value;
    console.log(textBox.value);
    if (textBox.value === ''){
        alert('Enter some choices');
        return;
    }
    const choices = readInput(input);
    // push the choices to the screen
    displayChoices(choices);
    console.log('CSV: ', choices);
    selectChoices(choices);
})


function readInput(text){
    let choices = text.split(',');
    return choices.map(choice => choice.trim());
}

function rngIndex(numItems){
    let rngArray = [];
    for (let i = 0; i < iterations; i++){
        rngArray.push(Math.floor(Math.random() * numItems));
        // return and remove duplicates in a row
    }
    console.log(rngArray);
    return rngArray;
}

function selectChoices(choices){
    // array of choices:
    const rngArray = rngIndex(choices.length);
    let choice = '';
    for (let i = 0; i < iterations; i++){
        setTimeout(() => {
            choice = choices[rngArray[i]]
            // pass rngArray[i] to 
            activeChoice(rngArray[i]);
            console.log(choice);
            if (i === iterations - 1){
                console.log('WINNER: ', choice);
            }

        }, (ms / iterations) * i)
    }
}

function clearChoices(){
    const choiceRow = document.querySelector('.choice-row');
    if (choiceRow.childElementCount.length === 0){
        return;
    }
    while (choiceRow.firstChild){
        choiceRow.removeChild(choiceRow.lastChild);
    }
}

function displayChoices(textItems){
    const choiceRow = document.querySelector('.choice-row');
    textItems.forEach(textItem => {
        const choice = document.createElement('div');
        choice.classList.add('choice');
        choice.textContent = textItem;
        choiceRow.appendChild(choice);
        console.log(choiceRow)
    })
}

function activeChoice(index){
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        if (choice.classList.contains('active')){
            choice.classList.remove('active');
        }
    })
    choices[index].classList.add('active');
}