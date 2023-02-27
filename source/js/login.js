import { async } from "q";
import { login } from "../api/certified/login_api"

const loginForm = document.querySelector(".login_form")

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const body = {
    email: e.target[0].value,
    password: e.target[1].value
  }
  const json = await login("POST", body)
  if (json.status === 200) {
    alert("로그인 성공!")
    localStorage.setItem("token", JSON.stringify(json.accessToken))
  } else {
    alert("아이디와 비밀번호가 일치하지 않습니다.!")
  }
})