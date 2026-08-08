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

    if (music && musicButton) {

        music.volume = 0.60;

        musicButton.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(function () {
                        musicButton.innerHTML = "🔊 Music On";
                    })
                    .catch(function (error) {
                        console.error("Music could not play:", error);
                        musicButton.innerHTML = "⚠️ Music Error";
                    });

            } else {

                music.pause();
                musicButton.innerHTML = "🎵 Play Music";

            }

        });

    }

});
