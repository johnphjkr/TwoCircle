import {url, headers} from "../requests"

// 회원가입
export async function signUp(method, data){
  const res = await fetch(url + "/auth/signup",{
    method,
    headers,
    body : JSON.stringify(data)
  })
  const json = await res.json()
  console.log(json)
}


