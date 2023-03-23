const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeElementsList = (elements) => {
  return elements.map((element) => {
    const liElement = document.createElement("li");
    liElement.textContent = element;
    liElement.classList.add("item");

    return liElement;
  });
};

const elementsListRef = makeElementsList(ingredients);
ingredientsEl.append(...elementsListRef);
