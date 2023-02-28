import { headers, url } from "../../requests.js";

export async function purchaseHistory() {
  const res = await fetch(url + "/products/transactions/details", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3NTkxODcxLCJleHAiOjE2Nzc2NzgyNzEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.NL9cARl0Qmii2h8mIY030VyX6IpL4cGzkYWsQHhWU3A`,
    },
  });
  return await res.json();
}
