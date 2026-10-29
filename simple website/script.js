const rabbit = document.getElementById("rabbit");
const messageBubble = document.getElementById("messageBubble");

let hasRevealed = false;

function revealMessage() {
  if (hasRevealed) return;

  hasRevealed = true;
  rabbit.classList.remove("sorry-mode", "love-mode", "pulse");
  void rabbit.offsetWidth;

  messageBubble.textContent = "I am sorry, Vijju";
  rabbit.classList.add("sorry-mode", "pulse");

  setTimeout(() => {
    rabbit.classList.remove("sorry-mode", "pulse");
    rabbit.classList.add("love-mode", "pulse");
    messageBubble.textContent = "I love you";
  }, 1800);
}

rabbit.addEventListener("click", revealMessage);
rabbit.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealMessage();
  }
});
