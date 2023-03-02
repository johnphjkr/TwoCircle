import { paymentHandler } from "../../source/js/payment.js";

// 렌더링
export async function paymentRender() {
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
              <div class="navbar_option">상품이름</div>
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
  paymentHandler();
}
