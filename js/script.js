function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  const icon = question.querySelector(".qa-toggle");

  answer.classList.toggle("active");
  icon.textContent = answer.classList.contains("active") ? "▲" : "▼";
}
// Wedding countdown — Philippines time
(function () {
  // September 19, 2026 at 3:00 PM Philippine Time
  const target = new Date("2026-09-19T15:00:00+08:00");

  function updateCountdown() {
    const now = new Date();
    let diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("days").textContent =
      String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
      String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
      String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
      String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
