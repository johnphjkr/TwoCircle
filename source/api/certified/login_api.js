import { router } from "../../route";
import { url, headers } from "../requests"



export async function login(method, data) {
  const res = await fetch(url + "/auth/login", {
    method,
    headers,
    body: JSON.stringify(data)
  })
  const json = await res.json()
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
  return res;
}