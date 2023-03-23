console.log(
  `Number of categories: ${document.querySelectorAll("li.item").length}`
);

const categoryList = document.querySelector("ul#categories");
const eachCategory = categoryList.querySelectorAll(".item");

eachCategory.forEach(function (item) {
  console.log(`Caregory: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
