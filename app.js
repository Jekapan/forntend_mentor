// Inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
// const birth = new Date(year, month - 1, day);

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function validate() {
  const inputs = document.querySelectorAll("input");
  const currDate = new Date();
  let validator = true;

  function getDayInMonth(y, m) {
    return new Date(y, m, 0).getDate();
  }

  const numberOfDays = getDayInMonth(year.value, month.value);

  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required";
      validator = false;
    } else if (year.value > currDate.getFullYear()) {
      year.style.borderColor = "red";
      year.parentElement.querySelector("small").innerText =
        "Must be a valid year";
      validator = fasle;
    } else if (month.value > 12) {
      month.style.borderColor = "red";
      month.parentElement.querySelector("small").innerText =
        "Must be a valid month";
      validator = fasle;
    } else if (day.value > 31) {
      day.style.borderColor = "red";
      day.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = fasle;
    } else if (month.value === 2 && day > 28) {
      day.style.borderColor = "red";
      day.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = fasle;
    } else if (
      year.value == currDate.getFullYear() &&
      month.value > currDate.getMonth() + 1
    ) {
      month.style.borderColor = "red";
      month.parentElement.querySelector("small").innerText =
        "Must be a valid month";
      validator = fasle;
    } else if (
      year.value == currDate.getFullYear() &&
      month.value <= currDate.getMonth() + 1 &&
      day.value > currDate.getDate()
    ) {
      day.style.borderColor = "red";
      day.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = fasle;
    } else if (numberOfDays < day.value) {
      day.style.borderColor = "red";
      day.parentElement.querySelector("small").innerText =
        "This month contain " + numberOfDays + " days";
      validator = fasle;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    age(year, month, day);
  }
}

function age() {
  const birth = new Date(year.value, month.value - 1, day.value);
  const now = new Date();
  const diff = new Date(now.valueOf() - birth.valueOf());

  document.getElementById("calcDay").innerHTML = diff.getDate();
  document.getElementById("calcMonth").innerHTML = diff.getMonth();
  document.getElementById("calcYear").innerHTML = Math.abs(
    diff.getFullYear() - 1970
  );
}
