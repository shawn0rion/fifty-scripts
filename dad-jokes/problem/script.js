const jokeButton = document.querySelector('.get-joke');
const jokeDisplay = document.querySelector('.display');
jokeButton.addEventListener('click', async () => {
    if (jokeDisplay.textContent === ''){
        jokeDisplay.classList.remove('hide');
    }
    try {
        const joke = await fetchJoke();
        jokeDisplay.textContent = joke;
    } catch(error){
        console.error(error);
        jokeDisplay.textContent = 'What do you call an API error? Jason.'
    }
});

async function fetchJoke(){
    const url = 'https://icanhazdadjoke.com';
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
    return data.joke;
}