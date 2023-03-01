import { login } from "../../source/api/certified/login_api"
// 로그인 기능 
export function loginHandler(){
  const loginForm = document.querySelector(".login_form")

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const body = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    login("POST", body)
    
    if (res.status === 200) {
      localStorage.setItem("accessToken", JSON.stringify(json.accessToken));
      if(json.user.email === process.env.ADMIN){
        alert("관리자님 환영합니다.")
        router.navigate("admin")
      }else{
        alert("로그인 성공!");
        history.go(-1);
      }
    } else {
      alert("아이디와 비밀번호가 일치하지 않습니다.!");
    }
  })
}