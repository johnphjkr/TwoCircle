import { headers, url } from "../../requests.js";

export async function purchaseHistory() {
  const res = await fetch(url + "/products/transactions/details", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3MTQyODU0LCJleHAiOjE2NzcyMjkyNTQsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.inBksaxKm8DBy8zfCcoRw5rgrJ9BGyMdDQ-sfunPBhs`,
    },
  });
  return await res.json();
}
