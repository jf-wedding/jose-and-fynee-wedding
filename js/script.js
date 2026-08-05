// Update the countdown to the wedding date (2026-09-19 local time)
(function(){
  const target = new Date('2026-09-19T00:00:00'); // adjust time if you want a specific hour
  const ids = ['days','hours','minutes','seconds'];
  function update(){
    const now = new Date();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * (1000*60*60*24);
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * (1000*60*60);
    const m = Math.floor(diff / (1000*60));
    diff -= m * (1000*60);
    const s = Math.floor(diff / 1000);

    document.getElementById('days').textContent = String(d).padStart(2,'0');
    document.getElementById('hours').textContent = String(h).padStart(2,'0');
    document.getElementById('minutes').textContent = String(m).padStart(2,'0');
    document.getElementById('seconds').textContent = String(s).padStart(2,'0');
  }

  update();
  setInterval(update, 1000);
})();
