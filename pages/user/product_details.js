import { productDetail } from "../../source/api/products/common/product_detail_api.js";

export async function productDetailRender(data) {
  const id = await productDetail(data.data.id);
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
<div id="wrap">
    <div class="wrap_container">
      <div class="product_detail">
        <div class="product_detail_inner">
          <!-- 제품 태그 -->
          <div class="product_tag">
            <a class="bigtag" href="#">${id.tags[0]} ></a>
            <a class="midtag" href="#">${id.tags[1]} ></a>
            <a class="smalltag" href="#">${id.tags[2]}</a>
          </div>
          <section class="product_content">
            <!-- 제품 이미지 -->
            <div class="container_content_productImg">
            <img src="${id.thumbnail}" alt="상품이미지">
          </div>
            <!-- 제품 정보 -->
            <section class="product_info">
              <div class="product_info_title">${id.title}</div>
              <!-- 평점, 찜 유뮤, share -->
              <section class="product_info_option">
                <div class="option_stock">
                  <span class="stock_icon material-symbols-outlined">
                    storefront
                  </span>
                  <p class="stock_text"></p>
                </div>
                <div class="option_share">
                  <span class="share_icon material-symbols-outlined">
                    share
                  </span>
                </div>
              </section>
              <div class="product_info_discount">${id.discountRate}</div>
              <!-- 제품 상세 이름, 제품 수량 추가 or 감소, 제품 가격 -->
              <section class="product_info_quantity">
                <div class="product_info_quantity_box">
                  <div class="box_option">${id.description}</div>
                  <div class="option_content">
                    <div class="option_content_btn">
                      <button class="btn_minus">-</button>
                      <div class="count"></div>
                      <button class="btn_plus">+</button>
                    </div>
                    <div class="option_content_price">${id.price}</div>
                  </div>
                </div>
              </section>
              <!-- 총 상품 가격 -->
              <section class="product_info_count">
                <div class="count_totaltext">총 상품금액</div>
                <div class="count_totalprice">${id.price}원</div>
              </section>
              <!-- 찜, 장바구니, 구매 버튼 -->
              <section class="product_info_btn">
                <div class="info_btn_heart">
                  <button class="btn_heart">
                    <span class="favorite_icon material-symbols-outlined">
                      favorite
                    </span>찜
                  </button>
                </div>
                <div class="info_btn_basket">
                  <button class="btn_basket">
                    <span class="bag_icon material-symbols-outlined">
                      shopping_bag
                    </span>장바구니
                  </button>
                </div>
                <div class="btn_purchase"><button class="productInfo_btn_purchase">구매하기</button></div>
              </section>
            </section>
          </section>
          <div class="photo">
            <img sec="${id.photo}" alt="상세이미지">
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  const stockEl = document.querySelector(".stock_text");
  let countTotalPriceEl = document.querySelector(".count_totalprice");
  let countEl = document.querySelector(".count");
  const minusBtnEl = document.querySelector(".btn_minus");
  const plusBtnEl = document.querySelector(".btn_plus");
  let heartBtnEl = document.querySelector(".btn_heart");
  const basketBtnEl = document.querySelector(".btn_basket");
  const purchaseBtnEl = document.querySelector(".productInfo_btn_purchase");
  const itemPriceEl = document.querySelector(".option_content_price");
  const discountRateEl = document.querySelector(".product_info_discount");
  const heartEl = document.querySelector(".favorite_icon");
  let soldOut = true;

  countEl.value = 1;
  countEl.innerHTML = countEl.value;

  // 수량 버튼
  minusBtnEl.addEventListener("click", async () => {
    if (countEl.value > 1) {
      countEl.value--;
      countEl.innerHTML = countEl.value;
      countTotalPriceEl.innerHTML =
        countEl.value * Number(itemPriceEl.textContent) + "원";
    }
  });

  plusBtnEl.addEventListener("click", async () => {
    countEl.value++;
    countEl.innerHTML = countEl.value;
    countTotalPriceEl.innerHTML =
      countEl.value * Number(itemPriceEl.textContent) + "원";
  });
  // 찜 버튼
  let heartBtn = false;
  heartBtnEl.addEventListener("click", async () => {
    heartBtn = !heartBtn;
    heartEl.style.color = heartBtn ? "red" : "black";
  });

  // 품절유무
  soldOut ? (stockEl.innerHTML = "재고있음") : (stockEl.innerHTML = "품절");

  // 장바구니
  basketBtnEl.addEventListener("click", async () => {
    const basket = {
      id: id.id,
      price: countTotalPriceEl.textContent,
      count: countEl.value,
      thumbnail: id.thumbnail,
    };
    localStorage.setItem("basket", JSON.stringify(basket));
  });

  purchaseBtnEl.addEventListener("click", async () => {
    const lists = {
      id: id.id,
      price: countTotalPriceEl.textContent,
      count: countEl.value,
      thumbnail: id.thumbnail,
    };
    localStorage.setItem("lists", JSON.stringify(lists));
  });
}
