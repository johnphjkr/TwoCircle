import { headers, url } from "../../requests.js";

export async function userlist() {
  const res = await fetch(url + "/auth/users", {
    method: "GET",
    headers: {
      ...headers,
      masterKey: true
    },
  });
  return await res.json();
}
