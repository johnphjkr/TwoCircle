import { addAccount } from "../api/account/account_add.js";
import { checkAccount } from "../api/account/account_add_check.js";
import { deleteAccount } from "../api/account/account_delete.js";
import { ableAccount } from "../api/account/account_able_check.js";

const sectionEl = document.querySelector(".account");
const dimmedLayer = document.querySelector(".dimmed_layer");
const modal = document.querySelector(".pop_up");
const closeBtnEl = document.querySelector(".close_btn");
const selectEl = document.querySelector(".bank_code_select");
const signatureInputEl = document.querySelector(".signature_input");
const phoneInputEl = document.querySelector(".phone_number_input");
const accountInputEl = document.querySelector(".bank_account_input");
const addBtnEl = document.querySelector(".add_btn");
const accountAddBtnEl = document.querySelector(".account_add_btn");
const divEl = document.querySelector(".account_info_wrap");

/**은행 등록시 필요 정보담는 객체*/
let accountInfo = {
  bankCode: "",
  accountNumber: "",
  phoneNumber: "",
  signature: false,
};



(async () => {
  const banks = await ableAccount();
  // renderAbleBank(banks)
  renderOption(banks)
  
})();


/**option 생성및 라벨과 은행코드 삽입*/
function renderOption(banks) {
  const optionList  = banks.map((bank) => {
    const optionEl = document.createElement('option')
    optionEl.value = bank.code
    optionEl.textContent = bank.name
    if(bank.disabled){
      optionEl.disabled = true
    }
    return optionEl;
  })
  selectEl.append(...optionList)
}



/**셀렉트 option 이벤트 함수*/
selectEl.addEventListener("change", (e) => {
  accountInfo.bankCode = e.target.value;
  
});

/** 계좌번호 입력 이벤트 함수*/
accountInputEl.addEventListener("input", (e) => {
  accountInfo.accountNumber = e.target.value;
  
});

/**전화번호 입력 이벤트 함수*/
phoneInputEl.addEventListener("input", (e) => {
  accountInfo.phoneNumber = e.target.value;
  validatePhoneTest(accountInfo.phoneNumber);
});

/** 서명 입력 이벤트 함수*/
signatureInputEl.addEventListener("input", () => {
  if (signatureInputEl.value.length > 0) {
    accountInfo.signature = true;
  }
});

/** 계좌 추가하기 버튼  이벤트 함수*/
addBtnEl.addEventListener("click", async () => {
  dimmedLayer.classList.add("_hidden");
  modal.classList.add("_hidden");
  addAccount(accountInfo);
});

/**계좌 추가하기 누를 시 모달창및 딤드레이어 나타나게 하기 */
accountAddBtnEl.addEventListener("click", () => {
  dimmedLayer.classList.remove("_hidden");
  modal.classList.remove("_hidden");
});

/**close 버튼 누를시 딤드레이아웃및 모달창 사라지게 하기 */
closeBtnEl.addEventListener("click", () => {
  dimmedLayer.classList.add("_hidden");
  modal.classList.add("_hidden");
});

/**계좌 등록후 정보 총 계좌 금액 렌더링 */
function renderTotalBalance(accounts) {
  const totalDivEl = document.createElement("div");

  totalDivEl.classList = "total_balance";

  totalDivEl.innerText = ` 총 잔액금액: ${accounts.totalBalance.toLocaleString(
    "ko-KR"
  )}원`;
  divEl.prepend(totalDivEl);
}

/**즉시 실행함수 */
(async () => {
  const accounts = await checkAccount();
  renderAccount(accounts);
  renderTotalBalance(accounts);
})();

/**계좌 등록후 정보 화면에 계좌 정보 랜더링 하는 함수 */

function renderAccount({ accounts }) {
  const listEl = document.createElement("ul");
  const liEls = accounts.map((account) => {
    const liEl = document.createElement("li");

    liEl.dataset.id = account.id;

    liEl.dataset.bank_code = account.bankCode;

    liEl.innerHTML = /*html*/ `
                     <div class ="user_account_info">
                      <div class="bank_name">은행명: ${account.bankName}</div>
                      <div class="account_number">계좌번호: ${
                        account.accountNumber
                      }</div>
                      <div class="bank_name">계좌 잔액: ${account.balance.toLocaleString(
                        "ko-KR"
                      )}원</div>
                      <button class="delete_btn">계좌해지</button>
                     <div>
                      
      `;
    const delBtnEl = liEl.querySelector(".delete_btn");
    delBtnEl.addEventListener("click", () => {
      renderModal(account);
    });

    return liEl;
  });
  listEl.innerHTML = "";
  listEl.append(...liEls);
  divEl.append(listEl);
}

/*계좌 해지 버튼 누를시 나오는  서명하는 모달창*/
function renderModal(account) {
  const modalDivEl = document.createElement("div");
  const modalTextDiv = document.createElement("div");
  const modalInputEl = document.createElement("input");
  const modalBtnEl = document.createElement("button");
  const dimmedLayer = document.querySelector(".dimmed_layer");
  dimmedLayer.classList.remove("_hidden");
  modalDivEl.classList = "modal";
  modalTextDiv.innerText = "서명";

  modalBtnEl.innerText = "계좌 해지";
  modalInputEl.addEventListener("input", () => {
    if (modalInputEl.value.length > 0) {
      deleteCheckInfo.signature = true;
    }
  });
  modalTextDiv.append(modalInputEl);
  modalDivEl.append(modalTextDiv, modalBtnEl);
  sectionEl.append(modalDivEl);

  modalBtnEl.addEventListener("click", async () => {
    deleteCheckInfo.accountId = account.id;

    modalDivEl.classList.add("_hidden");
    dimmedLayer.classList.add("_hidden");
    await deleteAccount(deleteCheckInfo);
  });
}

/**유효성 검사 */

const validatePhoneTest = (data) => {
  const validateWrap = document.querySelector(".validate_text");
  const validateText = document.createElement("span");
  const regExp = /(^01.{1})([0-9]{4})([0-9]{4})/g;

  validateText.classList.add("red");
  validateWrap.innerHTML = "";

  if (regExp.test(data)) {
    validateText.textContent = "옳바른 전화번호 입니다.";
    validateWrap.append(validateText);
    validateText.classList.add("green");
    validateText.classList.remove("red");
  } else {
    validateText.textContent = "잘못된 전화번호 입니다.";
    validateWrap.append(validateText);
  }

};








