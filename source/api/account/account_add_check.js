import { headers, url } from "../requests.js";



export async function checkAccount(data) {
  const res = await fetch(url + "/account ", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
    },
    
  });
  const json = await res.json();
  return json
}








