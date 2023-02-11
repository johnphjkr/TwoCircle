import { headers, url } from "../requests.js";

export async function login(data) {
  const res = await fetch(url + "/auth/login", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  console.log(res);
  return res.json();
  
}
