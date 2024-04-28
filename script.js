let bpmInput = document.getElementById('bpm');
let intervalInput = document.getElementById('interval');
let playBtnDiv = document.querySelector('#play-btn>div');

var metronome = new Metronome();

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

const updateBpm = (type) => {
  let updatedTempo =
    type === 'inc'
      ? metronome.tempo + parseInt(intervalInput.value)
      : metronome.tempo - parseInt(intervalInput.value);
  updatedTempo = parseInt(updatedTempo);

  if (!updatedTempo) return;

  metronome.tempo = updatedTempo;
  bpmInput.value = updatedTempo;
};
