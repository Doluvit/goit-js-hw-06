const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
let boxSizeValue = 30;

createBtn.addEventListener("click", () => {
  const number = inputEl.value;
  onClickBoxCreate(number);
});

destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  boxSizeValue = 30;
});

function onClickBoxCreate(number) {
  let elGroup = [];
  for (let i = 1; i <= number; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSizeValue}px`;
    box.style.height = `${boxSizeValue}px`;
    box.style.background = getRandomHexColor();
    boxSizeValue += 10;
    elGroup.push(box);
  }
  boxesEl.append(...elGroup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
