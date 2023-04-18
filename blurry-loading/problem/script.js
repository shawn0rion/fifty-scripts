const bg = document.querySelector('.bg');
const loadText = document.querySelector('#load-text');
loadText.style.opacity = 1;

const loader = setInterval(blurry, 30)
let percentLoaded = 0;

function blurry(){
    loadText.textContent = percentLoaded + '%';
    loadText.style.opacity = scale(percentLoaded, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(percentLoaded, 0, 100, 30, 0)}px)`
    console.log(bg.style.filter)
    console.log(loadText.style.opacity);
    if (percentLoaded > 99){
        clearInterval(loader);
        loadText.classList.add('hide');
    }
    percentLoaded += 1;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}