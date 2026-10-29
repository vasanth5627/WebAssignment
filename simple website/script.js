const rabbit = document.getElementById("rabbit");
const messageBubble = document.getElementById("messageBubble");
const hint = document.querySelector(".hint");
const SCENE_DURATION = 4000;

let hasStarted = false;

function showSorry() {
  rabbit.classList.remove("is-love");
  rabbit.classList.add("is-sorry");
  rabbit.setAttribute("aria-label", "The bunny is crying and saying I am sorry, Vijju");
  messageBubble.textContent = "I am sorry, Vijju";
  window.setTimeout(showLove, SCENE_DURATION);
}

function showLove() {
  rabbit.classList.remove("is-sorry");
  rabbit.classList.add("is-love");
  rabbit.setAttribute("aria-label", "The bunny is blowing a kiss and offering you a flower");
  messageBubble.textContent = "I love you";
  window.setTimeout(showSorry, SCENE_DURATION);
}

rabbit.addEventListener("click", () => {
  if (hasStarted) return;

  hasStarted = true;
  rabbit.classList.add("is-open");
  rabbit.setAttribute("aria-label", "The gift is opening and the bunny is coming out");
  hint.textContent = "A little surprise, just for you";
  window.setTimeout(showSorry, 1100);
});
