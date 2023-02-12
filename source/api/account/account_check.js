import { headers, url } from "../requests.js";
// import  addAccount from "../account/account_add"
const divEl = document.querySelector('.user_account_info')
localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV2VXY2T2UyejY4d0J5WXloZThHIiwiaWF0IjoxNjc2MjA0OTYxLCJleHAiOjE2NzYyOTEzNjEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.IL3WuUH_-elY7-kHwwwyoLeTkU3IKF7qQuiF3MymTsM"
);

let accountList = {
    totalBalance : null,
    accounts: []
}

export async function checkAccount(data) {
  const res = await fetch(url + "/account ", {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    
  });
  const json = await res.json();
  return json
}


;(async () => {
    const accounts = await checkAccount()
    renderAccount(accounts)
})()

function renderAccount({accounts}) {
  const listEl = document.createElement('ul')
  const liEls = accounts.map(account => {
    
    const liEl = document.createElement('li')
    
    liEl.dataset.id = accounts.id
    liEl.dataset.bank_code = accounts.bankCode
    liEl.innerHTML = /*html*/`
                    <div class="bank_name">은행명: ${account.bankName}</div>
                    <div class="account_number">계좌번호: ${account.accountNumber}</div>
                    <div class="bank_name">계좌 잔액: ${account.balance}원</div>
                    <div>
                      <button>계좌해지</button>
                    </div>
                    
    `
   console.log(account)
    return liEl
  })
  listEl.innerHTML = ''
  listEl.append(...liEls)
  divEl.append(listEl)
} 

