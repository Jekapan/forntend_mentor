const submitButton = document.querySelector("#button");
const dismissButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const form = document.querySelector("form");

function validate() {
  const input = document.querySelector("#email");
  let validator = true;

  if (!input.value) {
    document.querySelector("small").innerText = "Valid email required";
    input.style.cssText =
      "border: 2px solid rgb(255, 98, 87, 0.8); background: rgb(255, 98, 87, 0.2);";
    validator = false;
  } else {
  }

  return validator;
}

form.addEventListener("submit", submitHandle);

function submitHandle(e) {
  e.preventDefault();
  if (validate()) {
    modal.showModal();
  }
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// submitButton.addEventListener("click", () => {
//   modal.showModal();
// });

dismissButton.addEventListener("click", () => {
  modal.close();
});
