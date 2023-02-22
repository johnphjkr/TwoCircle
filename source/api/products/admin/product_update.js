import { headers, url } from "../../requests.js";

export async function product(id, data) {
  const res = await fetch(url + "/products/" + id, {
    method: "PUT",
    headers: {
      ...headers,
      masterKey: true
    },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  return json;
}
