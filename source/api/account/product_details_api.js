import { headers, url } from "../requests.js";

export async function login(data) {
  const res = await fetch(url + "/products/:productId", {
    method: "GET",
    headers,
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  console.log(res);
  return res.json();
}
