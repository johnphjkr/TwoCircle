import { headers, url } from "../requests.js";

/** 계좌 등록및 추가하는 함수 */
export async function addAccount(data) {
  try {
    const res = await fetch(url + "/account ", {
      method: "POST",
      headers: {
        ...headers,
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("accessToken")
        )}`,
      },
      body: JSON.stringify({
        bankCode: data.bankCode,
        accountNumber: data.accountNumber,
        phoneNumber: data.phoneNumber,
        signature: data.signature,
      }),
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}
