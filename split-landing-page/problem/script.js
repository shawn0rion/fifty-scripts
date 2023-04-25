const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Mouse over events for left and right elements
right.addEventListener('mouseover', function() {
  left.classList.remove('active');
  left.classList.add('inactive');
  right.classList.add('active');
  right.classList.remove('inactive');
});

left.addEventListener('mouseover', function() {
  right.classList.remove('active');
  right.classList.add('inactive');
  left.classList.add('active');
  left.classList.remove('inactive');
});

// Mouse out event for the window
window.addEventListener('mouseout', function() {
  left.classList.remove('active');
  left.classList.remove('inactive');
  right.classList.remove('active');
  right.classList.remove('inactive');
});
