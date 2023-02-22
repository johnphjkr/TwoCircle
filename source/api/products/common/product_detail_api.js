import { headers, url } from "../../requests.js";

export async function productDetail(id) {
  const res = await fetch(url + "/products/" + id, {
    method: "GET",
    headers,
  });
  return await res.json();
}