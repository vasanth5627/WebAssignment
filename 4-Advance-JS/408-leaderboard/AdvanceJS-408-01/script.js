const rabbit = document.getElementById("rabbit");
const messageBubble = document.getElementById("messageBubble");

let isSorry = true;

function toggleMessage() {
  isSorry = !isSorry;

  rabbit.classList.remove("sorry-mode", "love-mode", "pulse");
  void rabbit.offsetWidth;

  if (isSorry) {
    messageBubble.textContent = "I am sorry, Vijju";
    rabbit.classList.add("sorry-mode", "pulse");
  } else {
    messageBubble.textContent = "I love you";
    rabbit.classList.add("love-mode", "pulse");
  }
}

rabbit.addEventListener("click", toggleMessage);
rabbit.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMessage();
  }
});
