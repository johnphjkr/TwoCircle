import { adminProductList } from "../../source/js/admin/product_list"

export function adminPageRender(){
  const wrap = document.querySelector("#wrap")
  wrap.innerHTML = /*html*/`
    <div class="container">
      <div class="product_admin_list">
        <div class="all_check">
          <label for="all">
            <input type="checkbox" id="all" />
            <span>전체선택</span>
          </label>
          <button type="button" class="select_delete">
            선택항목 삭제하기
          </button>
          <a href="admin/product_add">추가하기</a>
        </div>
        <ul class="product_admin_ul"></ul>
      </div>
    </div>`

    adminProductList()
}
