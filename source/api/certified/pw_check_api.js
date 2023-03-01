import { router } from "../../route";
import { url, headers } from "../requests"



export async function pwCheckApi(method, data) {
  const res = await fetch(url + "/auth/login", {
    method,
    headers,
    body: JSON.stringify(data)
  })
  const json = await res.json()
  return res;
}