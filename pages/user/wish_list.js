import { renderWishList } from "../../source/js/wish_list"

const wishList = JSON.parse(localStorage.getItem("wish"));

export function wishRender() {
  const mypage = document.querySelector("#mypage")
  mypage.innerHTML=/*html*/`
  <section class="wish_list">
    <div class="inner wish_inner">
      <div class="wish_wrap">
        <div class="wish_header">
          <h2 class="header">찜 리스트</h2>
        </div>
        <ul class="list">
        </ul>
      </div>
    </div>
  </section>`
  renderWishList(wishList)
}