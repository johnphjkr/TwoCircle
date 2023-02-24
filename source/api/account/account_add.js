import { headers, url } from "../requests.js";


localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2NjE0MDQxLCJleHAiOjE2NzY3MDA0NDEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.7ruW6YnbgNLDQKfemTWDSLPsV4LEuEq6EelDtLcRmMk"
);



/** 계좌 등록및 추가하는 함수 */
export async function addAccount(data) {
  const res = await fetch(url + "/account ", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2NjE0MDQxLCJleHAiOjE2NzY3MDA0NDEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.7ruW6YnbgNLDQKfemTWDSLPsV4LEuEq6EelDtLcRmMk `,
    },
    body: JSON.stringify({
      bankCode: data.bankCode,
      accountNumber: data.accountNumber,
      phoneNumber: data.phoneNumber,
      signature: data.signature,
    }),
  });
  const json = await res.json();
  console.log(json);
}





