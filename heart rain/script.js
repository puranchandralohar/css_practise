let container = document.querySelector(".container");
let button = document.querySelector(".btn");
let text = document.querySelector(".text");

button.addEventListener("click", () => {
  button.style.display = "none";
  text.style.display = "block";
  container.style.backgroundColor = "pink";
  setInterval(rain, 300);
});

function rain() {
  let heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDirection = Math.random() * 3 + 4 + "s";
  heart.classList.add("heart");
  document.body.appendChild(heart);
}
