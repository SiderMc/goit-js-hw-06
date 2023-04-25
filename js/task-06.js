const validation = document.querySelector("[data-length]");
const input = document.querySelector("#validation-input");

const onTarget = (event) => {
  if (event.currentTarget.value.length === Number(validation.dataset.length)) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("valid");
    }
  }
};
input.addEventListener("blur", onTarget);

//все таки поправив бо накладались класи
