import { productUpdateHandler } from "../../source/js/admin/product_update";

export function productUpdate(id){
  const admin = document.querySelector("#admin")
  admin.innerHTML = /*html*/`
  <div class="admin">
    <div>
      <p>제품이름</p>
      <input type="text" class="product_name" />
    </div>
    <div>
      <p>제품가격</p>
      <input type="text" class="product_price" />
    </div>
    <div>
      <p>제품 상세 설명</p>
      <input type="text" class="product_text" />
    </div>
    <div>
      <p>태그</p>
      <input type="text" class="product_tag" />
    </div>
    <div>
      <p>제품 사진</p>
      <input type="file" class="product_update_img" />
      <div class="product_img"></div>
    </div>
    <div>
      <p>제품 상세 사진</p>
      <input type="file" class="detail_update_img" />
      <div class="product_detail_img"></div>
    </div>
    <div>
      <p>매진</p>
      <button type="button" class="soldout">판매중</button>
    </div>
    <div>
      <p>제품 할인율</p>
      <input type="text" class="product_discount" />
    </div>
    <button type="button" class="product_update">제품수정</button>
  </div>`;
  productUpdateHandler(id)
}

