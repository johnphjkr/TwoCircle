import { headers, url } from "../requests.js";



export async function ableAccount(data) {
  const res = await fetch(url + "/account/banks ", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
    },
  });
  const json = await res.json();
  return json;
}





