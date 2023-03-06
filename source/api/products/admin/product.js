import { headers, url } from "../../requests.js";

export async function product(id) {
  const res = await fetch(url + "/products/" + id, {
    method: "GET",
    headers
  });
  const json = await res.json();
  return json;
}
