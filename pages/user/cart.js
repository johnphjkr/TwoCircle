import { cartHandler, renderCartList } from "../../source/js/cart"

export function cartRender(){
  const app =document.querySelector("#app")
  const basketItem = JSON.parse(localStorage.getItem("basket"));
  const isEmpty = basketItem === null || basketItem.length === 0 
  const btnAreaEl = document.createElement('div')
  btnAreaEl.className = 'btn_area'
  btnAreaEl.innerHTML = /*html*/`
                      <div class="cancel_btn_wrap">
                      <button class="cancel_btn">상품 취소하기</button>
                    </div>
                    <div class="purchase_btn_wrap">
                      <button class="purchase_btn">구매하기</button>
                    </div>
                        `
  app.innerHTML=/*html*/`
  <section class="cart">
    <div class="inner cart_inner">
      <div class="cart_wrap">
        <div class="cart_header">
          <h2 class="header">장바구니</h2>
          <div class="card_list_area">
            <ul class="card_list">
              <li class="item">장바구니</li>
              <li class="item">주문 / 결제</li>
              <li class="item">주문 완료</li>
            </ul>
          </div>
        </div>
        <div>x</div>
<div>
        <div class="cart_area">
          <div class="cart_area_list_area">
            <div class="list_info">
              <div class="info_wrap">
                <div class="checkbox_wrap">
                  <input type="checkbox" class="info_total_checkbox" />
                </div>
                <div class="info_option_product">상품 / 옵션 정보</div>
                <div class="info_amount">수량</div>
                <div class="info_price">주문금액</div>
              </div>
            </div>
            <ul class="cart_list">
              
            </ul>
          </div>
          <div class="cart_total_price_area ">
 
          </div>
          ${!isEmpty? btnAreaEl.outerHTML: ''}
</div>
        </div>
      </div>
    </div>
  </section>`
  renderCartList()
  cartHandler()
}
