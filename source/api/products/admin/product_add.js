import { headers, url } from "../../requests.js";

export async function productAdd(data) {
  const res = await fetch(url + "/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      apikey: "FcKdtJs202301",
      username: "KDT4_Team5",
      masterKey: true
    },
    body: JSON.stringify(data)
  });
}
