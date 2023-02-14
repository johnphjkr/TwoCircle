import {login} from "../api/certified/login_api"

const loginForm = document.querySelector(".login_form")

loginForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const body = {
    email : e.target[0].value,
    password : e.target[1].value
  }
  login("POST",body)
})