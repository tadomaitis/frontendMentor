const form = document.querySelector("form");
const email = document.querySelector("input");

form.addEventListener("submit", e => {
  e.preventDefault();
  const emailToValidate = email.value;

  if (!emailIsValid(emailToValidate)) {
    form.classList.add("error");
  } else {
    classRemove(form, "error");
  }
});

email.addEventListener("focus", () => {
  classRemove(form, "error");
});

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function classRemove(element, className) {
  element.classList.remove(className);
}
