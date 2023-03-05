import { productUpdateHandler } from "../../source/js/admin/product_update";

export function productUpdate(id) {
  const admin = document.querySelector("#admin");
  admin.innerHTML = /*html*/`
  <div class="container">
    <div class="title">
      <h2>상품 수정하기</h2>
      <div class="button_box">
        <a href="#" onClick="history.go(-1); return false;">취소하기</a>
        <button type="button" class="product_update">제품수정</button>
      </div>
    </div>
    <div class="admin_wrap">
      <div class="admin_product_update">
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
          <span>태그는 ', '로 구분해주세요</span>
        </div>
        <div>
          <p>제품 사진</p>
          <div class="button thumbnail_btn">
            <p>찾아보기</p>
          </div>
          <input type="file" class="product_update_img" />
          <div class="product_img"></div>
          <span>1MB 이하의 사진만 가능합니다.</span>
        </div>
        <div>
          <p>제품 상세 사진</p>
          <div class="button photo_btn">
            <p>찾아보기</p>
          </div>
          <input type="file" class="detail_update_img" />
          <div class="product_detail_img"></div>
          <span>4MB 이하의 사진만 가능합니다.</span>
        </div>
        <div>
          <p>매진</p>
          <button type="button" class="soldout_btn">판매중</button>
        </div>
        <div>
          <p>제품 할인율</p>
          <input type="text" class="product_discount" />
            <span class="percent">%</span>
        </div>
      </div>
      <div class="product_update_img">
        <div class="thumbnail_img"></div>
        <div class="photo_img"></div>
      </div>
    </div>
  </div>`;
  productUpdateHandler(id);
}

