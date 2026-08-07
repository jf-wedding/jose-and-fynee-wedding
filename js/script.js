function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  const icon = question.querySelector(".qa-toggle");

  answer.classList.toggle("active");
  icon.textContent = answer.classList.contains("active") ? "▲" : "▼";
}
function toggleGiftOptions(button) {

    const giftOptions =
        button.nextElementSibling;

    giftOptions.classList.toggle("open");

    button.classList.toggle("active");

}
})();
