import { headers, url } from "../requests.js";

localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV2VXY2T2UyejY4d0J5WXloZThHIiwiaWF0IjoxNjc2MjA0OTYxLCJleHAiOjE2NzYyOTEzNjEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.IL3WuUH_-elY7-kHwwwyoLeTkU3IKF7qQuiF3MymTsM"
);

/** 계좌정보 객체*/ 
let accountInfo = {
  bankCode: "",
  accountNumber: "",
  phoneNumber: "",
  signature: true,
};

/** 은행 명 및 코드*/ 
let bankCodeNum = {
  [`KB국민은행 [3243]`]: "004",
  [`신한은행 [336]`]: "088",
  [`우리은행 [436]`]: "020",
  [`하나은행 [365]`]: "081",
  [`케이뱅크 [336]`]: "089",
  [`카카오뱅크 [427]`]: "090",
  [`NH농협은행 [3442]`]: "011",
};

const selectEl = document.querySelector(".bank_code_select");
const signatureInputEl = document.querySelector(".signature_input");
const phoneInputEl = document.querySelector(".phone_number_input");
const accountInputEl = document.querySelector(".bank_account_input");
const addBtnEl = document.querySelector(".add_btn");
const accountAddBtnEl = document.querySelector('.account_add_btn')
const closeBtnEl = document.querySelector('.close_btn')


export async function addAccount(data) {
  const res = await fetch(url + "/account ", {
    method: "POST",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

/**option 생성및 라벨과 은행코드 삽입*/
const createOption = () => {
  
  const optionList = Array.from(Object.entries(bankCodeNum)).map(
    ([bankCompany, bankCode]) => {
      const option = document.createElement("option");
      option.label = bankCompany;
      option.value = bankCode;
      return option;
    }
  );
  selectEl.append(...optionList);
  // console.log({ optionList });
  
};
createOption();


/**이벤트 함수*/
selectEl.addEventListener("change", (e) => {
  // console.log(e.target.value);
  accountInfo.bankCode = e.target.value
});

accountInputEl.addEventListener("input", () => {
  accountInfo.accountNumber = accountInputEl.value;
});

phoneInputEl.addEventListener("input", () => {
  accountInfo.phoneNumber = phoneInputEl.value;
});

signatureInputEl.addEventListener("input", () => {
  
 if(signatureInputEl.value) {

   accountInfo.signature  
 }
});

addBtnEl.addEventListener("click", () => {
  addAccount(accountInfo);
});

/**계좌 추가하기 누를 시 모달창및 딤드레이어 나타나게 하기 */ 
accountAddBtnEl.addEventListener("click", () => {
const dimmedLayer = document.querySelector('.dimmed_layer')
const modal = document.querySelector('.pop_up')
dimmedLayer.classList.remove('_hidden')
modal.classList.remove('_hidden')
})

/**close 버튼 누를시 딤드레이아웃및 모달창 사라지게 하기 */ 
closeBtnEl.addEventListener('click', () => {
  const dimmedLayer = document.querySelector('.dimmed_layer')
const modal = document.querySelector('.pop_up')
dimmedLayer.classList.add('_hidden')
modal.classList.add('_hidden')

})

