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

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    if (!music || !musicButton) {
        console.error("Music player not found.");
        return;
    }

    music.volume = 0.6;

    music.addEventListener("loadedmetadata", function () {
        console.log("Music loaded successfully.");
        console.log("Duration:", music.duration);
    });

    music.addEventListener("error", function () {
        console.error("Audio loading error:", music.error);
        musicButton.textContent = "⚠️ Music Failed to Load";
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
