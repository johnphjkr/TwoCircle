import {url, headers} from "../api/requests"

const signUpForm = document.querySelector(".signup_form")

signUpForm.addEventListener("submit",e=>{
  e.preventDefault()
  // 비밀번호 확인
  const pwCheck = e.target[4].value
  // 전송 할 Body
  const body = {
    // 각 Input에 해당하는 Value
    email : e.target[1].value,
    password : e.target[3].value,
    displayName : e.target[0].value,
    profileImgBase64 : e.target[5].value
  }
  // 비밀번호가 일치하면 전송
  if(body.password.length>=8 && body.password === pwCheck){
    signUp("POST",body)
  }else{
    alert("비밀번호가 옳바르지 않습니다.")
  }
})

// 회원가입
async function signUp(method, data){
  const res = await fetch(url + "/auth/signup",{
    method,
    headers,
    body : JSON.stringify(data)
  })
  const json = await res.json()
  console.log(json)
}



