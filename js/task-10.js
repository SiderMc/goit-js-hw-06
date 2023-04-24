const controls = document.querySelector("#controls");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = Number(controls.firstElementChild.value);
  controls.firstElementChild.value = "";

  let elements = "";
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    elements +=
      "<div style='width: " +
      (30 + i * 10) +
      "px; height: " +
      (30 + i * 10) +
      "px; background-color: " +
      color +
      "'></div>";
  }
  boxes.insertAdjacentHTML("beforeend", elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  controls.firstElementChild.value = "";
}
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
