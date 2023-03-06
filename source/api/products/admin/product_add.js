import { headers, url } from "../../requests.js";

export async function productAdd(data) {
  const res = await fetch(url + "/products", {
    method: "POST",
    headers: {
      ...headers,
      masterKey: true
    },
    body: JSON.stringify(data)
  });
}
