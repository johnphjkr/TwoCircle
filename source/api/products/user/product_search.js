import { headers, url } from "../../requests";

export async function searchProduct(data) {
  const res = await fetch(url + "/products/search",{
    method:"POST",
    headers: {
      ...headers,
    },
    body:JSON.stringify({...data})
  });
  const json = await res.json()
  return json
}