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
