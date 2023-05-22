const lastPosition = {x: 0, y: 0}

function createSquares(num){
    const container = document.querySelector('.container');
    const squares = [];
    for(let i = 0; i < num; i++){
        const div = document.createElement('div');
        div.className = 'a-square';  
        container.appendChild(div);
        squares.push(div);
    }
    const theSquare = document.createElement('div');
    theSquare.className = 'a-square';
    theSquare.id = 'the-square';
    theSquare.draggable = true;
    theSquare.addEventListener('drag', event => {
        handleMouseMove(event);
    })
    theSquare.addEventListener('dragend', event => {
        console.log('drop: ', lastPosition)
        

       squares.forEach(square => {
            if (inDropZone(square)){
                console.log('you made it into : ', square)
                moveSquare(theSquare, square);
            }
       })
    })
    container.firstChild.appendChild(theSquare);
}


function moveSquare(theSquare, squareFrame){
    theSquare.parentElement.removeChild(theSquare);
    squareFrame.appendChild(theSquare);
}

function handleMouseMove(event){
    // prevent reset when drop
    if (event.clientX === 0 && event.clientY === 0){
        return;
    }
    lastPosition.x = event.clientX;
    lastPosition.y = event.clientY;
}

function inDropZone(square){
    const bounds = square.getBoundingClientRect();
    return (
        lastPosition.x >= bounds.left && 
        lastPosition.x <= bounds.right &&
        lastPosition.y <= bounds.bottom && 
        lastPosition.y >= bounds.top
    )
}

createSquares(4);