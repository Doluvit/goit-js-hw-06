const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  if (inputEl.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = e.currentTarget.value;
  }
});
