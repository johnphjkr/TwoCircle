import { headers, url } from "../requests.js";

export async function authCheck() {
  const res = await fetch(url + "/auth/me", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3NTkyNTA4LCJleHAiOjE2Nzc2Nzg5MDgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.-7tsxBXDcpqRNGNVsa9Nj3GPi0wXkIqcHOhNy5snixo `,
    }
    // body: JSON.stringify({
    //   email: data.email,
    //   password: data.password,
    // })
  })
  return res.json();
}
