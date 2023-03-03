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
    const discountPrice = document.createElement("div");
    const listQuantity = document.createElement("div");
    const listTotalPrice = document.createElement("div");

    orderInfoListEl.classList.add("orderinfo_list");
    listImage.classList.add("list_image");
    listOption.classList.add("list_option");
    discountPrice.classList.add("discount_price");
    listQuantity.classList.add("list_quantity");
    listTotalPrice.classList.add("list_totalprice");
    listImage.innerHTML = `<img src="${list.thumbnail}" alt="아이템">`;
    listOption.innerHTML = `${list.title.replace(/\/.*/, "")}`;
    discountPrice.innerHTML = `${formatPrice(list.discountPrice)}`;
    listQuantity.innerHTML = `${list.count}`;
    listTotalPrice.innerHTML = `${formatPrice(list.totalPrice)}`;
    sum += list.totalPrice;
    originSum += list.price * list.count;

    orderInfoListEl.append(
      listImage,
      listOption,
      discountPrice,
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
  const orderNameEl = document.querySelector(".orderinfo_name_text");
  const orderEmailEl = document.querySelector(".orderinfo_email_text");
  const accountSelectEl = document.querySelector(".account_select");
  const accountSearchEl = document.querySelector(".account_search");
  const bankNameEl = document.querySelector(".bank_name_text");
  const accountNumberEl = document.querySelector(".account_number_text");
  const balanceEl = document.querySelector(".bank_balance_text");
  let bankCheck = false;

  orderNameEl.innerHTML = `${auth.displayName}`;
  orderEmailEl.innerHTML = `${auth.email}`;

  banks.map((bank) => {
    const accountOptionEl = document.createElement("option");
    accountOptionEl.textContent = `${bank.bankName}`;
    accountOptionEl.value = `${bank.id}`;
    accountSelectEl.append(accountOptionEl);
    accountSearchEl.addEventListener("click", () => {
      if (accountSelectEl.value === `${bank.id}`) {
        localStorage.setItem("bank", JSON.stringify(bank));
        bankCheck = true;
        bankNameEl.innerHTML = `${bank.bankName}`;
        accountNumberEl.innerHTML = `${bank.accountNumber}`;
        balanceEl.innerHTML = `${formatPrice(bank.balance)}`;
      }
    });
    return accountOptionEl, bankNameEl, accountNumberEl, balanceEl;
  });

  // 결제정보
  const totalPriceEl = document.querySelector(".info_totalprice_text");
  const totalPaymentEl = document.querySelector(".info_totalpayment_text");
  const totalDiscountEl = document.querySelector(".info_totaldiscount_text");
  totalPriceEl.append(`${formatPrice(originSum)}`);
  totalPaymentEl.append(`${formatPrice(sum)}`);
  if (formatPrice(originSum - sum) === "0원") {
    totalDiscountEl.append("0원");
  } else {
    totalDiscountEl.append(`-${formatPrice(originSum - sum)}`);
  }

  const payBtnEl = document.querySelector(".btn_payment");
  payBtnEl.addEventListener("click", async () => {
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

    liEl.push(sum);
    localStorage.setItem("payment", JSON.stringify(liEl));
    const data = JSON.parse(localStorage.getItem("payment"));
    const bankList = JSON.parse(localStorage.getItem("bank"));
    const dataList = [...data];

    if (bankList.balance < sum) {
      alert("잔액이 부족합니다.");
      return;
    }
    dataList.pop();
    
    dataList.map(async (data) => {
      await payment(data, bankList);
    });
    router.navigate("order_completed");
  });

  const cancelBtnEl = document.querySelector(".btn_cancel");
  cancelBtnEl.addEventListener("click", () => {
    localStorage.removeItem("bank");
    router.navigate("cart");
  });

  const allLinks = document.querySelectorAll("a");
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      localStorage.removeItem("bank");
    });
  });
}
