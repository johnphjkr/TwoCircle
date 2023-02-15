import { headers, url } from "../requests.js";

export async function userupdate(data) {
  const res = await fetch(url + "/auth/user", {
    method: "PUT",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2NDUwNTg2LCJleHAiOjE2NzY1MzY5ODYsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.UeOmAnqLS8SYNw9O-SO-h10OUNF8q8AQV4C_WIVWM6Q `,
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
