// Variables to function
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const beepSound = new Audio("assets/sounds/beep.wav");
const bpmInput = document.getElementById("bpm");
const displayBpm = document.getElementById("display-bpm");
const runningMessage = document.getElementById("running-message");
const visualBeat = document.getElementById("visual-beat");

// Metronome Object
const metronome = {
  bpm: 60,
  compass: "4/4",
  running: false,
  interval: "?",
  start() {
    if (bpmInput.value != "") {
      this.bpm = bpmInput.value;
      this.interval = 60000 / this.bpm;
      if (this.running == false) {
        this.running = setInterval(() => {
          beepSound.play();
          visualBeat.classList.add("beat");
          setTimeout(() => {
            visualBeat.classList.remove("beat");
          }, 200);
        }, this.interval);
        console.log(`Metronome started at: ${this.bpm}`);
        displayBpm.textContent = this.bpm;
        runningMessage.textContent = `Metronome started at: ${this.bpm}`;
      }
    } else {
      runningMessage.textContent = `Please type a value between 60 and 300 bpm`;
    }
  },
  stop() {
    clearInterval(this.running);
    this.running = false;
    console.log("Metronomo stopped");
    runningMessage.textContent = `Metronome Stopped`;
  },
};

// User Interaction
function startMetronome() {
  metronome.start();
}

function stopMetronome() {
  metronome.stop();
}

startButton.addEventListener("click", startMetronome);
stopButton.addEventListener("click", stopMetronome);
