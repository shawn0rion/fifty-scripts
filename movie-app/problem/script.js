class UIController{
    constructor(){
        this.container = document.querySelector('.container');
    }

    clearMovies(){
        while(this.container.firstChild){
            this.container.removeChild(this.container.lastChild);
        }
    }
     createMovieElement(title, year, poster) {
        // Create movie container div
        console.log('create ',title)
        let movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        // Create poster div with img
        let posterDiv = document.createElement('div');
        posterDiv.className = 'poster';

        let posterImg = document.createElement('img');
        posterImg.src = poster;

        posterDiv.appendChild(posterImg);
        movieDiv.appendChild(posterDiv);

        // Create text div
        let textDiv = document.createElement('div');
        textDiv.className = 'text';

        // Create title div
        let titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = title;
        
        textDiv.appendChild(titleDiv);

        // Create year div
        let yearDiv = document.createElement('div');
        yearDiv.className = 'year';
        yearDiv.textContent = year;

        textDiv.appendChild(yearDiv);

        // Append text div to movie div
        movieDiv.appendChild(textDiv);

        this.container.appendChild(movieDiv)
    }

}
const key = '181bf16';
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', event => {search(searchInput.value)})
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter'){
        // console.log('Search: ', event.target.value);
        search(event.target.value);
    }
})


function search(title){
    title = title.replace(' ', '+');
    // s instead of t to get more than one title
    let url = `http://www.omdbapi.com/?s=${title}&apikey=${key}`;
    getMovie(url);
}

function getMovie(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data['Search']);
        UIcontroller.clearMovies();
        [...data['Search']].forEach(movie => {
            if (movie['Poster'] === 'N/A'){
                return;
            } else{
                UIcontroller.createMovieElement(movie['Title'], movie['Year'], movie['Poster']);
            }
        })

    })
    .catch(error => {
        console.log(error)
    })
}

const UIcontroller = new UIController();
search('Samurai');