import { headers, url } from "../requests.js";

export async function authcheck(data) {
  const res = await fetch(url + "/auth/me", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer` + Response.headers.getItem("accessToken"),
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  return res.json();
}
