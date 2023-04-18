const btn = document.querySelector('.search-btn');
const search = document.querySelector('.search-bar');

btn.addEventListener('click', (e) => {
    search.classList.toggle('show');
});
