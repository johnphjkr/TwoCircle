import { headers, url } from "../../requests.js";

export async function allProduct() {
  const res = await fetch(url + "/products", {
    method: "GET",
    headers: {
      ...headers,
      masterKey: true,
    },
  });
  return await res.json();
}
