const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const potatoes = document.createElement("li");
potatoes.textContent = `${ingredients[0]}`;
potatoes.classList.add("item");

const mushrooms = document.createElement("li");
mushrooms.textContent = `${ingredients[1]}`;
mushrooms.classList.add("item");

const garlic = document.createElement("li");
garlic.textContent = `${ingredients[2]}`;
garlic.classList.add("item");

const tomatos = document.createElement("li");
tomatos.textContent = `${ingredients[3]}`;
tomatos.classList.add("item");

const herbs = document.createElement("li");
herbs.textContent = `${ingredients[4]}`;
herbs.classList.add("item");

const condiments = document.createElement("li");
condiments.textContent = `${ingredients[5]}`;
condiments.classList.add("item");

document
  .getElementById("ingredients")
  .append(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
