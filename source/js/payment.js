import { router } from "../../source/route.js";
import { payment } from "../../source/api/products/user/payment_api.js";
import { authCheck } from "../../source/api/certified/authcheck_api.js";
import { checkAccount } from "../../source/api/account/account_add_check.js";

export async function paymentHandler() {
  const auth = await authCheck(JSON.parse(localStorage.getItem("accessToken")));
  const account = await checkAccount(auth);
  let banks = [...account.accounts];

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
    const priceEl = document.createElement("div");
    const discountPrice = document.createElement("div");
    const listPrice = document.createElement("div");
    const listQuantity = document.createElement("div");
    const listTotalPrice = document.createElement("div");

    orderInfoListEl.classList.add("orderinfo_list");
    listImage.classList.add("list_image");
    listOption.classList.add("list_option");
    discountPrice.classList.add("discount_price");
    priceEl.classList.add("price");
    listPrice.classList.add("list_price");
    listQuantity.classList.add("list_quantity");
    listTotalPrice.classList.add("list_totalprice");
    listImage.innerHTML = `<img src="${list.thumbnail}" alt="아이템">`;
    listOption.innerHTML = `${list.title.replace(/\/.*/, "")}`;
    discountPrice.innerHTML = `${formatPrice(list.discountPrice)}`;
    listPrice.innerHTML = `${formatPrice(list.price)}`;
    listQuantity.innerHTML = `${list.count}`;
    listTotalPrice.innerHTML = `${formatPrice(list.totalPrice)}`;
    sum += list.totalPrice;
    originSum += list.price * list.count;

    priceEl.append(listPrice, discountPrice);
    orderInfoListEl.append(
      listImage,
      listOption,
      priceEl,
      listQuantity,
      listTotalPrice
    );
    return orderInfoListEl;
  });
  orderNavBarEl.after(...liEl);

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  }

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
    accountSearchEl.addEventListener("click", () => {
      if (accountSelectEl.value === `${bank.id}`) {
        bankCheck = true;
        localStorage.setItem("bank", JSON.stringify(bank));
        bankNameEl.innerHTML = `은행 ${bank.bankName}`;
        bankCodeEl.innerHTML = `코드 ${bank.bankCode}`;
        accountNumberEl.innerHTML = `계좌번호 ${bank.accountNumber}`;
        balanceEl.innerHTML = `잔액 ${formatPrice(bank.balance)}`;
      }
    });
    return accountOptionEl, bankNameEl, bankCodeEl, accountNumberEl, balanceEl;
  });

  // 결제정보
  const totalPriceEl = document.querySelector(".info_totalprice");
  const totalPaymentEl = document.querySelector(".info_totalpayment");
  const totalDiscountEl = document.querySelector(".info_totaldiscount");
  totalPriceEl.innerHTML = `총 구매금액 ${formatPrice(originSum)}`;
  totalPaymentEl.innerHTML = `총 결제금액 ${formatPrice(sum)}`;
  totalDiscountEl.innerHTML = `총 할인금액 ${Math.round(
    ((originSum - sum) / originSum) * 100
  )}%`;

  const payBtnEl = document.querySelector(".btn_payment");
  payBtnEl.addEventListener("click", () => {
    if (!bankCheck) {
      alert("계좌를 선택해주세요");
      return;
    }
    const arrList = [];
    const paymentList = [...lists];
    const liEl = paymentList.map((list) => {
      const order = {
        id: list.id,
        title: list.title,
        description: list.description,
        price: list.price,
        totalPrice: list.totalPrice,
        thumbnail: list.thumbnail,
      };

      if (list.count > 1) {
        for (let i = 0; i < list.count; i++) {
          arrList.push(order);
        }
      }
      return order;
    });

    if (arrList) {
      for (let i = 1; i < arrList.length; i++) {
        liEl.push(arrList[i]);
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

  const cancelBtnEl = document.querySelector(".btn_cancel");
  cancelBtnEl.addEventListener("click", () => {
    router.navigate("cart");
  });
}
