import { payment } from "../../source/api/products/user/payment_api.js";
import { authCheck } from "../../source/api/certified/authcheck_api.js";
import { router } from "../../source/route.js";
import { checkAccount } from "../../source/api/account/account_add_check.js";

// 렌더링
export async function paymentRender() {
  const auth = await authCheck(JSON.parse(localStorage.getItem("accessToken")));
  const account = await checkAccount(auth);
  let banks = [...account.accounts];
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
<div id="wrap">
    <div class="wrap_container">
      <div class="payment">
        <div class="payment_inner">
          <!-- 주문정보 -->
          <section class="inner_orderinfo">
            <!-- 주문 상품 상단 바 -->
            <div class="orderinfo_title_navbar">주문상품</div>
            <div class="orderinfo_navbar">
              <div class="navbar_productname">상품정보</div>
              <div class="navbar_option">옵션</div>
              <div class="navbar_price">가격</div>
              <div class="navbar_quantity">수량</div>
              <div class="navbar_totalprice">총 금액</div>
            </div>
            <!-- 주문자 정보 -->
            <div class="orderinfo_title_orderer">주문자 정보</div>
            <div class="orderinfo_orderer">
              <div class="orderinfo_name"></div>
              <div class="orderinfo_email"></div>
              <div class="orderinfo_account">
                <div class="account_text">계좌선택</div>
                <select class="account_select"></select>
                <button class="account_search">계좌조회</button>
              </div>
              <div class="account_info">
                <div class="account_info_list">
                  <div class="list_bankname"></div>
                  <div class="list_bankcode"></div>
                  <div class="list_accountnumber"></div>
                  <div class="list_balance"></div>
                </div>
              </div>
            </div>
          </section>
          <!-- 결제 정보 요약 -->
          <section class="inner_summary">
            <div class="summary_info">
              <div class="info_paymentinfo">결제정보</div>
              <div class="info_totalprice"></div>
              <div class="info_totaldiscount"></div>
              <div class="info_totalpayment"></div>
            </div>
            <div class="summary_btn">
              <button class="btn_payment">결제하기</button>
              <button class="btn_cancel">취소</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  `;

  // 주문상품
  const orderNavBarEl = document.querySelector(".orderinfo_navbar");
  const item = JSON.parse(localStorage.getItem("basket"));
  let sum = 0;
  let originSum = 0;
  let lists = [...item];
  const liEl = lists.map((list) => {
    const orderInfoListEl = document.createElement("div");
    const listImage = document.createElement("div");
    const listOption = document.createElement("div");
    const listPrice = document.createElement("div");
    const listQuantity = document.createElement("div");
    const listTotalPrice = document.createElement("div");

    orderInfoListEl.classList.add("orderinfo_list");
    listImage.classList.add(".list_image");
    listOption.classList.add(".list_option");
    listPrice.classList.add(".list_price");
    listQuantity.classList.add(".list_quantity");
    listTotalPrice.classList.add(".list_totalprice");
    listImage.innerHTML = `<img src="${list.thumbnail}" alt="아이템">`;
    listOption.innerHTML = `${list.description}`;
    listPrice.innerHTML = `${list.price}`;
    listQuantity.innerHTML = `${list.count}`;
    listTotalPrice.innerHTML = `${list.totalPrice}`;
    sum += list.totalPrice;
    originSum += list.price * list.count;

    orderInfoListEl.append(
      listImage,
      listOption,
      listPrice,
      listQuantity,
      listTotalPrice
    );
    return orderInfoListEl;
  });
  orderNavBarEl.after(...liEl);

  // 주문자 정보
  const orderNameEl = document.querySelector(".orderinfo_name");
  const orderEmailEl = document.querySelector(".orderinfo_email");
  const accountSelectEl = document.querySelector(".account_select");
  const accountSearchEl = document.querySelector(".account_search");
  const bankNameEl = document.querySelector(".list_bankname");
  const bankCodeEl = document.querySelector(".list_bankcode");
  const accountNumberEl = document.querySelector(".list_accountnumber");
  const balanceEl = document.querySelector(".list_balance");
  let bankCheck = false;

  orderNameEl.innerHTML = `이름${auth.displayName}`;
  orderEmailEl.innerHTML = `이메일${auth.email}`;

  banks.map((bank) => {
    const accountOptionEl = document.createElement("option");
    accountOptionEl.textContent = `${bank.bankName}`;
    accountOptionEl.value = `${bank.id}`;
    accountSelectEl.append(accountOptionEl);
    accountSearchEl.addEventListener("click", async () => {
      if (accountSelectEl.value === `${bank.id}`) {
        bankCheck = true;
        localStorage.setItem("bank", JSON.stringify(bank));
        bankNameEl.innerHTML = `은행 ${bank.bankName}`;
        bankCodeEl.innerHTML = `코드 ${bank.bankCode}`;
        accountNumberEl.innerHTML = `계좌번호 ${bank.accountNumber}`;
        balanceEl.innerHTML = `잔액 ${bank.balance}`;
      }
    });
    return accountOptionEl, bankNameEl, bankCodeEl, accountNumberEl, balanceEl;
  });

  // 결제정보
  const totalPriceEl = document.querySelector(".info_totalprice");
  const totalPaymentEl = document.querySelector(".info_totalpayment");
  const totalDiscountEl = document.querySelector(".info_totaldiscount");
  const discount = (((originSum - sum) / originSum) * 100).toFixed(1);
  totalPriceEl.innerHTML = `총 구매금액 ${originSum}`;
  totalPaymentEl.innerHTML = `총 결제금액 ${sum}`;
  totalDiscountEl.innerHTML = `총 할인금액 ${discount}%`;

  const payBtnEl = document.querySelector(".btn_payment");
  payBtnEl.addEventListener("click", async () => {
    if (bankCheck === false) {
      alert("계좌를 선택해주세요");
      return;
    }
    const arrList = [];
    const paymentList = [...lists];
    const liEl = paymentList.map((list) => {
      const id = list.id;
      const title = list.title;
      const description = list.description;
      const price = list.price;
      const totalPrice = list.totalPrice;
      const thumbnail = list.thumbnail;

      if (list.count > 1) {
        for (let i = 0; i < list.count; i++) {
          const orderList = {
            id: list.id,
            title: list.title,
            description: list.description,
            price: list.price,
            totalPrice: list.totalPrice,
            thumbnail: list.thumbnail,
          };
          arrList.push(orderList);
        }
        localStorage.setItem("arr", JSON.stringify(arrList));
      }
      const order = { id, title, description, price, totalPrice, thumbnail };
      return order;
    });
    const arr = JSON.parse(localStorage.getItem("arr"));

    if (arr) {
      for (let i = 1; i < arr.length; i++) {
        liEl.push(arr[i]);
      }
    }

    localStorage.setItem("payment", JSON.stringify(liEl));
    const data = JSON.parse(localStorage.getItem("payment"));
    const bankList = JSON.parse(localStorage.getItem("bank"));
    const dataList = [...data];

    if (bankList.balance < sum) {
      alert("잔액이 부족합니다.");
      return;
    }
    dataList.map(async (data) => {
      await payment(data, bankList);
    });
    router.navigate("order_completed");
  });
}
