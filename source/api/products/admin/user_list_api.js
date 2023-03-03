import { headers, url } from "../../requests.js";

export async function userList() {
  const res = await fetch(url + "/auth/users", {
    method: "GET",
    headers: {
      ...headers,
      masterKey: true,
    },
  });
  const json = await res.json();
  return json;
}
