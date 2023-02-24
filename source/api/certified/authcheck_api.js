import { headers, url } from "../requests.js";

export async function authCheck() {
  const res = await fetch(url + "/auth/me", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2NjE0MDQxLCJleHAiOjE2NzY3MDA0NDEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.7ruW6YnbgNLDQKfemTWDSLPsV4LEuEq6EelDtLcRmMk `,
    }
    // body: JSON.stringify({
    //   email: data.email,
    //   password: data.password,
    // })
  })
  return res.json();
}
