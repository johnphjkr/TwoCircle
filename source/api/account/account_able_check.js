import { headers, url } from "../requests.js";


// localStorage.setItem(
//   "accessToken",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikk5emhuSkVQZ0diaDV0UmxlejRLIiwiaWF0IjoxNjc2Mjk0MjAwLCJleHAiOjE2NzYzODA2MDAsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.z3t0jW7f-RB1fCaX_NCyrQ-Hi6JEZ_P0Gnyd6nRHpHw"
// );



export async function ableAccount(data) {
  const res = await fetch(url + "/account/banks ", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const json = await res.json();
  return json;
}


// const accounts = await checkAccount()


const banks = await ableAccount();
const renderAlertText = () => {
  const bankCodeWrapEl = document.querySelector(".bank_code_wrap");
  const bankAccountWrapEl = document.querySelector(".bank_account_wrap");
  const bankCodeAlert = document.createElement("div");
  const bankAccountAlert = document.createElement("div");

  bankCodeWrapEl.append(bankCodeAlert);
  bankAccountWrapEl.append(bankAccountAlert);

  const maps = banks.map((bank) => {
    return [bank.name, { disabled: bank.disabled, digits: bank.digits }];
  });
  const ableAccountMetaMap = new Map([...maps]);
  

  console.log({ ableAccountMetaMap });
  const kbAbleInfo = ableAccountMetaMap.get("KB국민은행");
  console.log({ kbAbleInfo });
};

renderAlertText(banks);
