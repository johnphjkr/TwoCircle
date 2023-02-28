import { url, headers } from "../requests"



export async function login(method, data) {
  const res = await fetch(url + "/auth/login", {
    method,
    headers,
    body: JSON.stringify(data)
  })
  const json = await res.json()
  console.log(res.status)
  if (res.status === 200) {
    alert("로그인 성공!");
    localStorage.setItem("accessToken", JSON.stringify(json.accessToken));
    history.go(-1);
  } else {
    alert("아이디와 비밀번호가 일치하지 않습니다.!");
  }
  return res;
}