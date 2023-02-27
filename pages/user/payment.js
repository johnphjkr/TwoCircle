import { payment } from "../../source/api/products/user/payment_api.js";
import { login } from "../../source/api/certified/login_api";
import { router } from "../../source/route.js";

// 렌더링
export async function paymentRender() {
  const item = JSON.parse(localStorage.getItem("basket"));
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
            <!-- 주문상품 리스트 -->
            <div class="orderinfo_list"></div>
            <!-- 주문자 정보 -->
            <div class="orderinfo_title_orderer">주문자 정보</div>
            <div class="orderinfo_orderer">
              <div class="orderinfo_name">이름</div>
              <div class="orderinfo_email">이메일</div>
              <div class="orderinfo_account">
                <div class="account_text">계좌선택</div>
                <select class="account_select"></select>
                <button class="account_search">계좌잔액조회</button>
              </div>
              <div class="account_info">
                <div class="account_info_totalbalance">총 계좌 잔액</div>
                <div class="account_info_balance">사용가능 잔액</div>
              </div>
            </div>
          </section>
          <!-- 결제 정보 요약 -->
          <section class="inner_summary">
            <div class="summary_info">
              <div class="info_paymentinfo">결제정보</div>
              <div class="info_totalprice">총 상품금액</div>
              <div class="info_totaldiscount">총 할인금액</div>
              <div class="info_totalpayment">총 결제금액</div>
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

  console.log(item.length);
  const orderInfoListEl = document.querySelector(".orderinfo_list");
 
  orderInfoListEl.innerHTML = /*html*/ `
              <div class="list_image"><img src="${item[0].thumbnail}" alt="아이템"></div>
              <div class="list_option">${item[0].description}</div>
              <div class="list_price">${item[0].price}</div>
              <div class="list_quantity">${item[0].count}</div>
              <div class="list_totalprice">${item[0].totalprice}</div>
  `;

  // todo: 여러개 넣어야함
}
