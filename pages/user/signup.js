import "../../scss/user/signup.scss"
import { signUp } from "../../source/api/certified/signup_api"

export function signupRender(){
  const app = document.querySelector("#app")
  app.innerHTML = /* html */ `
  <section id="signup"class="signup_section">
    <div class="signup_section_inner">
      <!-- 회원가입 제목 -->
      <h1 class="signup_section_title">회원가입</h1>
      <!-- 회원가입 폼 -->
      <form class="signup_form">
        <!-- 이름 -->
        <div class="signup_form_name">
          <h3>이름<span class="asterisk">*</span></h3>
          <input type="text" class="signup_form_name_input" placeholder="홍길동">
        </div>
        <!-- 아이디(이메일) -->
        <div class="signup_form_id">
          <h3>이메일<span class="asterisk">*</span></h3>
          <input type="text" class="signup_form_id_input" placeholder="TwoCircle@team5.com">
        </div>
        <!-- 비밀번호 -->
        <div class="signup_form_pw">
          <h3>비밀번호<span class="asterisk">*</span></h3>
          <input type="password" class="signup_form_pw_input"
          placeholder="최소 8자 이상">
          <span class="signup_form_pw_error error"></span>
        </div>
        <!-- 비밀번호 확인 -->
        <div class="signup_form_check">
          <h3>비밀번호 확인<span class="asterisk">*</span></h3>
          <input type="password" class="signup_form_check_input" placeholder="비밀번호를 다시 입력해주세요.">
          <span class="signup_form_check_error error"></span>
        </div>
        <!-- 프로필 -->
        <div class="signup_form_profil">
          <h3>프로필</h3>
          <input type="file" class="signup_form_profil_input">
          <p class="signup_form_profil_alert">1MB 이하의 사진만 가능합니다.</p>
          <figure class="signup_form_profil_img"></figure>
        </div>
        <!-- 가입하기 버튼 -->
        <button class="signup_form_btn">가입하기</button>
      </form>
    </div>
  </section>
  `
  
  // 회원가입 기능 

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
    if(e.target.value===pw.value&&e.target.value){
      err.textContent = "비밀번호가 일치합니다."
      err.style.color = "#2DB400"
      inputBox.style.border="1px solid #2DB400"
    }else if(e.target.value!=pw.value || !e.target.value){
      err.textContent = "비빌번호가 일치하지 않습니다!"
      err.style.color = "var(--pink-color)"
      inputBox.style.border="1px solid var(--pink-color)"
    }
  })

  // 이미지 파일 업로드

  const inputImgEl = document.querySelector(".signup_form_profil_input[type='file']")
  const figureEl = document.querySelector(".signup_form_profil_img")
  inputImgEl.addEventListener("change", ()=>{
    const file = inputImgEl.files[0]
    figureEl.innerHTML = ""
    if(file.size <= 1000000){
      figureEl.style.border = "1px solid #2DB400"
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener("load",e=>{
        const imgEl = document.createElement("img")
        imgEl.src = e.target.result
        figureEl.append(imgEl)
      }) 
    }else{
      figureEl.style.border = "1px solid var(--pink-color)"
    }
  })
}
