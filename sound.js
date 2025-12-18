const alarmSound = document.getElementById("alarmSound");
const timerSound = document.getElementById("timerSound");

function playSound(mode) {
  const sound = mode === "alarm" ? alarmSound : timerSound;
  sound.loop = true;
  sound.play();
}

function stopSound() {
  [alarmSound, timerSound].forEach(s => {
    s.pause();
    s.currentTime = 0;
  });
}
