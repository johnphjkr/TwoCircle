import { headers, url } from "../../requests.js";

export async function productDelete(id) {
  const res = await fetch(url + "/products/" + id, {
    method: "DELETE",
    headers: {
      ...headers,
      masterKey: true
    }
  });
  const json = await res.json();
  return json;
}
