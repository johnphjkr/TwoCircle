import { headers, url } from "../../requests.js";

export async function product() {
  const res = await fetch(url + "/products/", {
    method: "GET",
    headers
  });
  const json = await res.json();
  return json;
}
