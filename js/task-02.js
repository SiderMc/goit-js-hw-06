const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const element = document.createElement("li");

  element.classList.add("item");
  element.textContent = ingredient;

  document.querySelector("#ingredients").append(element);
});
