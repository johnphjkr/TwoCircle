import { headers, url } from "../../requests.js";

export async function purchaseHistory() {
  let filtered_items = [];
  const res = await fetch(url + "/products/transactions/details", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
    },
  });
  if (res.status === 400) {
    return filtered_items;
  }
  else {
    return await res.json();
  }
}
