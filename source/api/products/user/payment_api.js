import { headers, url } from "../../requests.js";

export async function payment(data) {
  const res = await fetch(url + "/products/buy", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      productId: data.productId,
      accountId: data.accountId,
    }),
  });
  return await res.json();
}