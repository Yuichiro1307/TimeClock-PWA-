// ページ切り替え
document.querySelectorAll("nav button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
  };
});

// アラーム追加
document.getElementById("addAlarm").onclick = () => {
  const time = prompt("HH:MM");
  if (!time) return;

  const [h, m] = time.split(":").map(Number);
  setAlarm(h, m);
};

// アラームキャンセル
document.getElementById("cancelAlarm").onclick = cancelCountdown;

// タイマー開始
document.getElementById("startTimer").onclick = () => {
  const sec = Number(document.getElementById("timerSec").value);
  if (sec > 0) setTimer(sec);
};

// タイマーキャンセル
document.getElementById("cancelTimer").onclick = cancelCountdown;

// Service Worker登録
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
