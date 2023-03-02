import { productRender } from "../../source/js/product_list";

export function searchListRender(search) {
  const app = document.querySelector("#app");
  app.innerHTML = /*html*/ `
  <div class="inner">
    <!-- 카테고리 제목 -->
    <h1 class="search_result"><span>"${search}"</span> 에 대한 검색 결과입니다.</h1>
    <section class="products">
      <div class="dot-wrap">
        <div class="dot-spinner"></div>
      </div>
      <ul class="products_lists">
      </ul>
    </section>
  </div>`
}
