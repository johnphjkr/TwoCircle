import { headers, url } from "../requests.js";

export async function userupdate(data) {
  const res = await fetch(url + "/auth/user", {
    method: "PUT",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3NTkyNTA4LCJleHAiOjE2Nzc2Nzg5MDgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.-7tsxBXDcpqRNGNVsa9Nj3GPi0wXkIqcHOhNy5snixo `,
    },
    body: JSON.stringify({
      displayName: data.displayName,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      profileImgBase64: data.profileImgBase64
    }),
  });
  return res.json();
}
