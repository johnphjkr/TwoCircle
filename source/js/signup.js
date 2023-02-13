import { signUp } from "../api/certified/signup_api"
const signUpForm = document.querySelector(".signup_form")

signUpForm.addEventListener("submit",e=>{
  e.preventDefault()
  // 비밀번호 확인
  const pwCheck = e.target[3].value
  // 전송 할 Body
  const body = {
    // 각 Input에 해당하는 Value
    email : e.target[1].value,
    password : e.target[2].value,
    displayName : e.target[0].value,
    profileImgBase64 : e.target[4].value
  }
  // 비밀번호가 일치하면 전송
  if(body.password.length>=8 && body.password === pwCheck){
    signUp("POST",body)
  }else if(body.password.length<7){
    alert("비밀번호가 옳바르지 않습니다.")
  }else if(body.password.length>=8 && body.password != pwCheck){
    alert("비밀번호가 일치하지 않습니다.")
  }
})


// 비밀번호 일치 확인

const pw = document.querySelector(".signup_form_pw_input")
const pwCheck = document.querySelector(".signup_form_check_input")


// 비밀번호
pw.addEventListener("input",e=>{
  const err = document.querySelector(".signup_form_pw_error")
  const inputBox = document.querySelector(".signup_form_pw_input:focus")  
  if(e.target.value.length > 7){
    err.textContent = "사용 가능한 비밀번호 입니다."
    err.style.color = "#2DB400"
    inputBox.style.border="1px solid #2DB400"
    console.log(e.target.value)
  }else{
    err.textContent = "8자 이상의 비밀번호를 입력하세요."
    err.style.color = "var(--pink-color)"
    inputBox.style.border="1px solid var(--pink-color)"
  }
})

// 비밀번호 일치 여부
pwCheck.addEventListener("input",e=>{
  const err = document.querySelector(".signup_form_check_error")
  const inputBox = document.querySelector(".signup_form_check_input:focus")
  if(e.target.value===pw.value){
    err.textContent = "비밀번호가 일치합니다."
    err.style.color = "#2DB400"
    inputBox.style.border="1px solid #2DB400"
  }else{
    err.textContent = "비빌번호가 일치하지 않습니다!"
    err.style.color = "var(--pink-color)"
    inputBox.style.border="1px solid var(--pink-color)"
  }
})


