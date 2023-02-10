import { headers, url } from "../requests.js";

export async function logout(data) {
  const res = await fetch(url + "/auth/logout", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer <accessToken>`,
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  return res.json();
}