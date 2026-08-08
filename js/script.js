document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       GIFT OPTIONS
    ========================= */

    const button = document.getElementById("giftToggleButton");
    const options = document.getElementById("giftOptions");

    if (button && options) {
        button.addEventListener("click", function () {
            options.classList.toggle("open");
            button.classList.toggle("open");
        });
    }


    /* =========================
       BACKGROUND MUSIC
    ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    if (!music || !musicButton) {
        console.error("Music player elements were not found.");
        return;
    }

    music.volume = 0.6;

    music.addEventListener("canplaythrough", function () {
        console.log("Music is ready to play.");
    });

    music.addEventListener("error", function () {
        console.error("Audio failed to load:", music.error);
        musicButton.textContent = "⚠️ Music Failed";
    });

    musicButton.addEventListener("click", async function () {

        if (music.paused) {

            try {
                await music.play();
                musicButton.textContent = "🔊 Music On";
            } catch (error) {
                console.error("Playback error:", error);
                musicButton.textContent = "⚠️ Music Error";
            }

        } else {

            music.pause();
            musicButton.textContent = "🎵 Play Music";

        }

    });

});
