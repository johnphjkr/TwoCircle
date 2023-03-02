import { purchaseHandler } from "../../source/js/purchase_history";

export function purchaseRender() {
  const mypage = document.querySelector("#mypage");
  mypage.innerHTML = /*html*/ `
  <div class="container_content purchase_history">
    <div class="container_content_title">
      <h2 class="content_h2">주문/배송 조회</h2>
      <p>주문 내역을 클릭하면 상세 내역을 확인 하실 수 있으며, 주문 상태에 따라 <strong>취소/교환/반품 신청이 가능</strong> 합니다.
        <br>신청하신 취소/교환/반품 처리 내역은 <strong>'취소/교환/반품 내역'</strong> 메뉴에서 확인 가능합니다.
      </p>
    </div>

    <!-- 필터 -->
    <section class="container_content_delivery">
              <div class="delivery_type_text">배송구분</div>
              <div class="delivery_filter">
                <div class="delivery_filter_month">
                  <button class="delivery_filter_month_1">1개월</button>
                  <button class="delivery_filter_month_3">3개월</button>
                  <button class="delivery_filter_month_6">6개월</button>
                  <button class="delivery_filter_month_12">1년</button>
                </div>
                <div class="delivery_filter_status">
                  <button class="delivery_filter_status_1">전체 보기</button>
                  <button class="delivery_filter_status_2">구매 확정</button>
                  <button class="delivery_filter_status_3">구매 취소</button>
                </div>
              </div>
            </section>
            <!-- 구매 리스트 상단 바 -->
            <section class="container_content_list">
              <div class="list_bar">
                <div class="list_bar_orderDate">주문일시</div>
                <div class="list_bar_productInfo">상품정보</div>
                <!--<div class="list_bar_orderNumber">상품이름</div>-->
                <div class="list_bar_payAmount">결제금액</div>
                <div class="list_bar_payMethod">주문 상태</div>
              </div>

              <!-- 구매 리스트 아이템 -->
              <div class="list_item_container">
                <div class="layerPopup">
                  <div class="spinner"></div>
                </div>
                <ul class="list_item_list_select"></ul>
                <ul class="list_item_list_confirm"></ul>
                <ul class="list_item_list_cancel"></ul>
                <div class="list_item_pagination"></div>
              </div>

  </div>`;
  purchaseHandler()
}
