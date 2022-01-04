import "./styles.css";

const password1 = document.querySelector("#password1");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

password1.addEventListener("input", () => {
  password1.type = "password";
  if (password1.value.length < 10) {
    password1.style.color = "red";
  } else {
    password1.style.color = "green";
  }
});

submitBtn.addEventListener("click", () => {
  password1.value = "";
});
