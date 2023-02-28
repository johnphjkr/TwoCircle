export function wishRender() {
  const mypage = document.querySelector("#mypage")
  mypage.innerHTML=/*html*/`
  <section class="wish">
    <div class="inner wish_inner">
      <div class="wish_wrap">
        <div class="wish_header">
          <h2 class="header">찜 리스트</h2>
        </div>

        <div class="wish_area">
          <div class="list_area">
            <div class="list_info">
              <div class="info_wrap">
                <div class="checkbox_wrap">
                  <input type="checkbox" />
                </div>
                <div class="option_product">상품 / 옵션 정보</div>
                <div class="amount">수량</div>
                <div class="order_price">주문금액</div>
              </div>
            </div>
            <ul class="wish_list">
              <li class="item">
                <div class="wish_card">
                  <div class="checkbox_wrap">
                    <input type="checkbox" />
                  </div>
                  <div class="img_wrap">
                    <img src="/image/image1 (13).jpg" alt="" class="card_img" />
                  </div>
                  <div class="product_name_wrap">
                    <span class="name">
                      블랙 54mm BASIC C1 라운즈베이직 동글이 안경테
                    </span>
                  </div>
                  <div class="product_total_wrap">
                    <span class="amount">1</span>
                  </div>

                  <div class="price_wrap">
                    <span class="price">25,000원</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn_area">
          <div class="delete_btn_wrap">
            <button class="delete_btn">삭제하기</button>
          </div>
          <div class="purchase_btn_wrap">
            <button class="purchase_btn">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  </section>;`
}