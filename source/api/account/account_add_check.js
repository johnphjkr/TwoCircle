import { headers, url } from "../requests.js";

// localStorage.setItem(
//   "accessToken",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikk5emhuSkVQZ0diaDV0UmxlejRLIiwiaWF0IjoxNjc2Mjk0MjAwLCJleHAiOjE2NzYzODA2MDAsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.z3t0jW7f-RB1fCaX_NCyrQ-Hi6JEZ_P0Gnyd6nRHpHw"
// );



export async function checkAccount(data) {
  const res = await fetch(url + "/account ", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    
  });
  const json = await res.json();
  return json
}








