import { headers, url } from "../requests.js";

export async function userupdate(data) {
  const res = await fetch(url + "/auth/user", {
    method: "PUT",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2NjE0MDQxLCJleHAiOjE2NzY3MDA0NDEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.7ruW6YnbgNLDQKfemTWDSLPsV4LEuEq6EelDtLcRmMk `,
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
