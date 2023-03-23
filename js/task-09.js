const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", setBodyRandomColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function setBodyRandomColor() {
  const newHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newHexColor;
  spanEl.textContent = newHexColor;
}
