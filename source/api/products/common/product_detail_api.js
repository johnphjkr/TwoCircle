import { headers, url } from "../../requests.js";

// todo: 제품 id 받아와서 넣기
export async function productDetail(id) {
  const res = await fetch(url + "/products/" + id, {
    method: "GET",
    headers,
  });
  console.log(res);
  return await res.json();
}
