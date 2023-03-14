import { headers, url } from "../requests.js";

export async function deleteAccount(data) {
  try {
    const res = await fetch(url + `/account`, {
      method: "DELETE",
      headers: {
        ...headers,
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("accessToken")
        )}`,
      },
      body: JSON.stringify({
        accountId: data.accountId,
        signature: data.signature,
      }),
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}
