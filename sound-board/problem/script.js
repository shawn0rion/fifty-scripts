const sounds = [
  {
    'bing_bong': 'sounds/bing_bong.mp3',
  },
  {
    'bruh': 'sounds/bruh.mp3',
  },
  {
    'deez_nuts': 'sounds/deez_nuts.mp3',
  },
  {
    'you_lying': 'sounds/you_lying.mp3',
  },
  {
    'oof': 'sounds/oof.mp3',
  },
  {
    'uwu': 'sounds/uwu.mp3',
  },
];

function renderAudioElement(name, src) {
  // Create a h2 element
  const nameElement = document.createElement('h2');
  nameElement.className = 'name';
  nameElement.textContent = name.replaceAll('_', ' ');

  // Create an audio element
  const audioElement = document.createElement('audio');
  audioElement.src = src;
  audioElement.preload = true;

  // Create a button element
  const playButton = document.createElement('button');
  playButton.className = 'play';
  playButton.innerHTML = '<i class="fa-solid fa-play"></i>';

  // Add event listener to play the audio when the button is clicked
  playButton.addEventListener('click', () => {
    stopAllAudio();
    audioElement.play();
  });

  // Create a sound div
  const soundDiv = document.createElement('div');
  soundDiv.className = 'sound';
  soundDiv.appendChild(nameElement);
  soundDiv.appendChild(playButton);
  soundDiv.appendChild(audioElement);

  // Append the sound div to the body
  document.querySelector('.sounds').appendChild(soundDiv);
}

sounds.forEach(sound => {
  const name = Object.keys(sound)[0];
  const src = sound[name];
  renderAudioElement(name, src);
});


function playAudio(sound) {
    stopAllAudio();
    sound.play();
}

function stopAllAudio(){
    const audioElements = document.querySelectorAll('audio');
    console.log(audioElements.length)
    audioElements.forEach(element => {
        element.pause();
        element.currentTime = 0;
    })
}