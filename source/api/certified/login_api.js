import { url, headers } from "../requests"



export async function login(method, data) {
  const res = await fetch(url + "/auth/login", {
    method,
    headers,
    body: JSON.stringify(data)
  })
  const json = await res.json()
  console.log(res.status)

  return res;
}