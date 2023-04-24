const boxHeight = 200;
let previousScrollPosition = window.scrollY;

document.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    const scrollDistance = window.scrollY + window.innerHeight;
    const shownBoxes = document.querySelectorAll('.box.show');
    const boxesHeight = shownBoxes.length * boxHeight;
    const difference = scrollDistance - boxesHeight;
    // console.log(`scroll - boxes = ${difference}`)
    if (currentScrollPosition > previousScrollPosition && 
        difference > boxHeight){
        document.querySelectorAll('.box')[shownBoxes.length].
        classList.add('show');
    } else if (previousScrollPosition > currentScrollPosition && 
        difference < boxHeight/4){
        document.querySelectorAll('.box')[shownBoxes.length - 1].
        classList.remove('show');
    }
    previousScrollPosition = currentScrollPosition;
});

// console.log(window);
setInterval(() =>{
    console.log(window.scrollY + window.innerHeight);
},1000)