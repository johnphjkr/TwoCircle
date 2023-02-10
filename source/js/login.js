import { login } from "../api/certified/login_api.js";
// import { router } from "./route.js";

const loginEl = document.querySelector(".login_form--id");
const passwordEl = document.querySelector(".login_form--pw");
const loginBtn = document.querySelector(".login_form--btn");
const loginformEl = document.querySelector(".login_form");

let email = "";
let password = "";

loginEl.addEventListener("input", (e) => {
  email = e.target.value;
});

passwordEl.addEventListener("input", (e) => {
  password = e.target.value;
});

// loginBtn.addEventListener("click", async () => {
//   await login({ email, password });
  
// });
loginformEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  await login({ email, password });
});