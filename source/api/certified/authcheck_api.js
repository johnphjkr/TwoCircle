import { headers, url } from "../requests.js";

export async function authCheck() {
  const res = await fetch(url + "/auth/me", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3NDg0MzM4LCJleHAiOjE2Nzc1NzA3MzgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.sdnZE2B_739pRIrAHD3OuV0TlVUJGx0Jc_Liqo-XcWQ `,
    }
    // body: JSON.stringify({
    //   email: data.email,
    //   password: data.password,
    // })
  })
  return res.json();
}
