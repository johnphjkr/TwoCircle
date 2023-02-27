export async function orderCompletedRender() {
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
            <div class="content_bank">은행</div>
            <div class="content_ordernum">주문번호</div>
            <div class="content_addres">배송지</div>
            <div class="content_method">배송방법</div>
            <div class="content_memo">배송메모</div>
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
}
