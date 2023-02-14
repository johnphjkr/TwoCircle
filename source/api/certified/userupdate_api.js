import { headers, url } from "../requests.js";

export async function userupdate(data) {
  const res = await fetch(url + "/auth/user", {
    method: "PUT",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2MzYwNTg5LCJleHAiOjE2NzY0NDY5ODksImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.ZN37388x60oXF4S8d3NY1AmPWkBVQf1eDqciOa_Z3UA `,
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
