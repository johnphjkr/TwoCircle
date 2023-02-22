import { headers, url } from "../../requests.js";

export async function productList() {
  const res = await fetch(url + "/products", {
    method: "GET",
    headers: {
      ...headers,
      masterKey: true
    }
  });
  const json = await res.json();
  return json;
}
