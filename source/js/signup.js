import { signup } from "../api/certified/signup_api";
const inputNameEl = document.querySelector(".signup_form_name--input");
const inputEmailEl = document.querySelector(".signup_form_id--input");
const inputPasswordEl = document.querySelector(".signup_form_pw--input");
const inputPasswordCheckEl = document.querySelector(
  ".signup_form_check--input"
);
const signupBtnEl = document.querySelector(".signup_form--btn");
const signupEl = document.querySelector(".signup_form");

let displayName = "";
let id = "";
let pw = "";

inputNameEl.addEventListener("input", (e) => {
  displayName = e.target.value;
});

inputEmailEl.addEventListener("input", (e) => {
  id = e.target.value;
});

inputPasswordEl.addEventListener("input", (e) => {
  pw = e.target.value;
});

inputPasswordCheckEl.addEventListener("input", (e) => {
  passwordCheck = e.target.value;
});

signupEl.addEventListener("sumit", async (e) => {
  e.preventDefault();
  await signup({ displayName, id, pw });
});
