import { productDetail } from "../../source/api/products/common/product_detail_api.js";
import { router } from "../../source/route.js";

export async function productDetailRender(data) {
  const id = await productDetail(data.data.id);
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
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
              <div class="product_info_discount">할인율 ${
                id.discountRate
              }%</div>
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
                    <div class="option_content_price">${id.price}원</div>
                  </div>
                </div>
              </section>
              <!-- 총 상품 가격 -->
              <section class="product_info_count">
                <div class="count_totaltext">총 상품금액</div>
                <div class="count_totalprice">
                ${id.price * ((100 - id.discountRate) * 0.01)}원
                </div>
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
            <img src="${id.photo}" alt="상세이미지">
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
  const heartEl = document.querySelector(".favorite_icon");
  const bigTagEl = document.querySelector(".bigtag");
  const midTagEl = document.querySelector(".midtag");
  const smallTagEl = document.querySelector(".smalltag");
  let soldOut = true;
  let countTotalPrice = id.price * ((100 - id.discountRate) * 0.01);
  countEl.value = 1;
  countEl.innerHTML = countEl.value;

  // 수량 버튼
  minusBtnEl.addEventListener("click", async () => {
    if (countEl.value > 1) {
      countEl.value--;
      countEl.innerHTML = countEl.value;
      countTotalPrice =
        countEl.value * id.price * ((100 - id.discountRate) * 0.01);
      countTotalPriceEl.innerHTML = countTotalPrice.toString() + "원";
    }
  });

  plusBtnEl.addEventListener("click", async () => {
    countEl.value++;
    countEl.innerHTML = countEl.value;
    countTotalPrice =
      countEl.value * id.price * ((100 - id.discountRate) * 0.01);
    countTotalPriceEl.innerHTML = countTotalPrice.toString() + "원";
  });
  // 찜 버튼
  let heartBtn = false;
  heartBtnEl.addEventListener("click", async () => {
    heartBtn = !heartBtn;
    heartEl.style.color = heartBtn ? "red" : "black";
  });

  // 품절유무
  soldOut ? (stockEl.innerHTML = "재고있음") : (stockEl.innerHTML = "품절");

  if (id.tags[2] === undefined) {
    smallTagEl.style.display = "none";
    midTagEl.innerHTML = `${id.tags[1]}`;
    bigTagEl.innerHTML = `${id.tags[0]} >`;
    midTagEl.style.color = "#181818";
  }
  if (id.tags[1] === undefined) {
    smallTagEl.style.display = "none";
    midTagEl.style.display = "none";
    bigTagEl.innerHTML = `${id.tags[0]}`;
    bigTagEl.style.color = "#181818";
  }
  if (id.tags[0] === undefined) {
    smallTagEl.style.display = "none";
    midTagEl.style.display = "none";
    bigTagEl.style.display = "none";
  }

  // 장바구니
  basketBtnEl.addEventListener("click", async () => {
    const itemEl = {
      id: id.id,
      count: countEl.value,
      price: id.price,
      totalPrice: countTotalPrice,
      thumbnail: id.thumbnail,
      title: id.title,
      discountRate: id.discountRate,
      description: id.description,
    };
    let basketEl = JSON.parse(localStorage.getItem("basket"));
    if (basketEl === null) {
      basketEl = [];
    }
    basketEl.push(itemEl);

    // todo: 장바구니에 담을때 동일한 아이디가 있으면 count만 증가시키기, 구매도 마찬가지
    localStorage.setItem("basket", JSON.stringify(basketEl));
  });

  purchaseBtnEl.addEventListener("click", async () => {
    const itemEl = {
      id: id.id,
      count: countEl.value,
      price: id.price,
      totalPrice: countTotalPrice,
      thumbnail: id.thumbnail,
      title: id.title,
      discountRate: id.discountRate,
      description: id.description,
    };
    let lists = JSON.parse(localStorage.getItem("basket"));
    if (lists === null) {
      lists = [];
    }
    lists.push(itemEl);
    localStorage.setItem("basket", JSON.stringify(lists));
    router.navigate("/payment");
  });
}
