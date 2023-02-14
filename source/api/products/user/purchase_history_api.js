import { headers, url } from "../../requests.js";

export async function purchaseHistory() {
  const res = await fetch(url + "/products/transactions/details", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return await res.json();
}
