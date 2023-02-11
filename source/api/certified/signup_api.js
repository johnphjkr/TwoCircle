import { headers, url } from "../requests.js";

export async function signup(data) {
  const res = await fetch(url + "/auth/signup", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      displayName: data.displayName,
    }),
  });
  console.log(res);
  return res.json();
}
