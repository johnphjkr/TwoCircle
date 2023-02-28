import { authCheck } from "../../source/api/certified/authcheck_api.js";
import { checkAccount } from "../../source/api/account/account_add_check.js";

export async function orderCompletedRender() {
  const auth = await authCheck(JSON.parse(localStorage.getItem("accessToken")));
  const account = await checkAccount(auth);
  let bank = [...account.accounts];
  const item = JSON.parse(localStorage.getItem("basket"));
  
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
  <div id="wrap">
    <div class="container">
      <div class="order_completed">
        <div class="order_completed_inner">
          <!-- 상단 제목 -->
          <section class="title">
            <h1 class="title_text">주문이 완료되었습니다.</h1>
          </section>
          <!-- 주문내용 -->
          <section class="content">
            <div class="content_name">주문정보</div>
            <div class="content_bank">주문자</div>
            <div class="content_ordernum">주문일자</div>
            <div class="content_addres">결제정보</div>
            <div class="content_method">00외1건</div>
            <div class="content_memo">주문 물건 자세히 보기는 마이페이지에서 확인해주세요</div>
            <div class="content_btn">
              <button class="content_mypagebtn">마이페이지</button>
              <button class="content_homebtn">홈으로</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  `;


  localStorage.removeItem("basket");
  localStorage.removeItem("payment");
  localStorage.removeItem("bank");
  localStorage.removeItem("arr");
  
  
  
}
