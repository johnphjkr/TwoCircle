import { headers, url } from "../requests.js";

export async function addAccount(data) {
    const res = await fetch(url + "/account ", {
      method: "POST",
      headers: {
        ...headers,
        authorization: `Bearer` + Response.headers.getItem("accessToken"),
      },
      body: JSON.stringify({
        bankCode: data.bankCode,
        accountNumber: data.accountNumber,
        phoneNumber:data.phoneNumber,
        signature:data.signature
      }),
    });
    return res.json();
  }