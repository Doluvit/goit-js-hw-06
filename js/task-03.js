const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgGalleryEl = document.querySelector(".gallery");
imgGalleryEl.style.listStyle = "none";
imgGalleryEl.style.display = "flex";
imgGalleryEl.style.gap = "15px";

const makeElementsList = (elements) => {
  return elements
    .map(
      (element) => `<li>
  <img src="${element.url}" alt="${element.alt}" width="auto" height="300">
  </li>`
    )
    .join("");
};
const elementsListEl = makeElementsList(images);
imgGalleryEl.insertAdjacentHTML("beforeend", elementsListEl);



