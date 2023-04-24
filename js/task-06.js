const validation = document.querySelector("[data-length]");
const input = document.querySelector("#validation-input");

const onTarget = (event) => {
  if (event.currentTarget.value.length === Number(validation.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", onTarget);
