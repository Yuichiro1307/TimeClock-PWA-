let timeoutId = null;
let currentMode = null;

function startCountdown(ms, mode) {
  cancelCountdown();

  currentMode = mode;

  timeoutId = setTimeout(() => {
    playSound(mode);
    showNotification(
      mode === "alarm" ? "アラーム" : "タイマー終了",
      "タップして停止"
    );
  }, ms);
}

function cancelCountdown() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  stopSound();
}

// アラーム（時刻 → 残り時間）
function setAlarm(hour, minute) {
  const now = new Date();
  const target = new Date();

  target.setHours(hour, minute, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);

  startCountdown(target - now, "alarm");
}

// タイマー（秒）
function setTimer(seconds) {
  startCountdown(seconds * 1000, "timer");
}
