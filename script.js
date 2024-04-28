let setIntervalId;
let bpmInput = document.getElementById('bpm');
let playBtnDiv = document.querySelector('#play-btn>div');

var metronome = new Metronome();
const metronomeStart = () => {
  metronome.tempo = parseInt(bpmInput.value);
  metronome.start();
};

const metronomeStop = () => {
  metronome.stop();
};

const metronomeToggleStartStop = () => {
  if (metronome.isRunning) {
    metronome.stop();
    playBtnDiv.className = 'play';
  } else {
    metronome.tempo = parseInt(bpmInput.value);
    metronome.start();
    playBtnDiv.className = 'pause';
  }
};

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
}

const clearOldCache = () => {
  caches.keys().then(function (names) {
    for (let name of names) caches.delete(name);
  });
};
