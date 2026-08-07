document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("giftToggleButton");
    const options = document.getElementById("giftOptions");

    if (button && options) {

        button.addEventListener("click", function () {

            options.classList.toggle("open");
            button.classList.toggle("open");

        });

    }

});
