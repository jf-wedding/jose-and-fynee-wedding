function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  const icon = question.querySelector(".qa-toggle");

  answer.classList.toggle("active");
  icon.textContent = answer.classList.contains("active") ? "▲" : "▼";
}


// ============================================
// WEDDING COUNTDOWN
// September 19, 2026 — 3:00 PM Philippines
// ============================================

(function () {

  // Prevent this countdown from starting more than once
  if (window.weddingCountdownStarted) {
    return;
  }

  window.weddingCountdownStarted = true;

  const targetDate = new Date("2026-09-19T15:00:00+08:00");

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function updateCountdown() {

    const now = Date.now();
    const target = targetDate.getTime();

    let distance = target - now;

    // Wedding has arrived
    if (distance <= 0) {
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
      return;
    }

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    const days = Math.floor(distance / day);

    distance %= day;

    const hours = Math.floor(distance / hour);

    distance %= hour;

    const minutes = Math.floor(distance / minute);

    distance %= minute;

    const seconds = Math.floor(distance / 1000);

    daysElement.textContent =
      String(days).padStart(2, "0");

    hoursElement.textContent =
      String(hours).padStart(2, "0");

    minutesElement.textContent =
      String(minutes).padStart(2, "0");

    secondsElement.textContent =
      String(seconds).padStart(2, "0");
  }

  updateCountdown();

  window.weddingCountdownInterval =
    setInterval(updateCountdown, 1000);

})();
