import { productDetail } from "../api/products/common/product_detail_api.js";
import { allProduct } from "../api/products/admin/allProduct_api.js";

const productTitleEl = document.querySelector(".product_info_title");
const stockEl = document.querySelector(".stock_text");
const productInfoPriceEl = document.querySelector(".product_info_price");
const optionContentPriceEl = document.querySelector(".option_content_price");
let countTotalPriceEl = document.querySelector(".count_totalprice");
const productDescriptionEl = document.querySelector(".box_option");
const productbigTagEl = document.querySelector(".bigtag");
const producmidTagEl = document.querySelector(".midtag");
const productsmallTagEl = document.querySelector(".smalltag");
const productThumbnailEl = document.querySelector(
  ".container_content_productImg"
);
let countEl = document.querySelector(".count");
const photoEl = document.querySelector(".photo");
const minusBtnEl = document.querySelector(".btn_minus");
const plusBtnEl = document.querySelector(".btn_plus");
let heartBtnEl = document.querySelector(".btn_heart");
const basketBtnEl = document.querySelector(".btn_basket");
const purchaseBtnEl = document.querySelector(".productInfo_btn_purchase");

let soldOut = true;
countEl.value = 1;
countEl.innerHTML = countEl.value;
let allProducts = [];

// 수량 버튼
minusBtnEl.addEventListener("click", async () => {
  const products = await productDetail(allProducts[0].id);
  if (countEl.value > 1) {
    countEl.value--;
    countEl.innerHTML = countEl.value;
    countTotalPriceEl.innerHTML = countEl.value * products.price + "원";
  }
});

plusBtnEl.addEventListener("click", async () => {
  const products = await productDetail(allProducts[0].id);
  countEl.value++;
  countEl.innerHTML = countEl.value;
  countTotalPriceEl.innerHTML = countEl.value * products.price + "원";
});

// 찜 버튼
let heartBtn = false;
heartBtnEl.addEventListener("click", async () => {
  heartBtn = !heartBtn;
});

// 품절유무
soldOut ? (stockEl.innerHTML = "재고있음") : (stockEl.innerHTML = "품절");

// 장바구니
basketBtnEl.addEventListener("click", async () => {
  const products = await productDetail(allProducts[0].id);
  const basket = {
    id: products.id,
    price: countTotalPriceEl.textContent,
    count: countEl.value,
    thumbnail: products.thumbnail,
  };
  // todo: 장바구니로 데이터 넘김 .. append(basket)
});

purchaseBtnEl.addEventListener("click", async () => {
  const products = await productDetail(allProducts[0].id);
  const lists = {
    id: products.id,
    price: countTotalPriceEl.textContent,
    count: countEl.value,
    thumbnail: products.thumbnail,
  };
  // todo: 결제창으로 데이터 넘김.. append(lists)
});

// todo: main.js에서 해당 상품 누를때 해당 상품의 리스트가 제일 앞에 오게 하고 product_details.js에서 id를 받아올때 제일 앞에 있는 id를 받아오면 됨
// ? 현재 물품 추가 어떻게 되는지, 썸네일이랑 상세이미지 링크 거는법 알아보고 테스트

(async () => {
  allProducts = await allProduct();
  const products = await productDetail(allProducts[0].id);
  render(products);
})();

// 렌더링
async function render(data) {
  productTitleEl.innerHTML = data.title;
  productInfoPriceEl.innerHTML = data.price.toString() + "원";
  optionContentPriceEl.innerHTML = data.price.toString() + "원";
  countTotalPriceEl.innerHTML = data.price.toString() + "원";
  productDescriptionEl.innerHTML = data.description;
  productbigTagEl.innerHTML = data.tags[0] + " >";
  producmidTagEl.innerHTML = data.tags[1] + " >";
  productsmallTagEl.innerHTML = data.tags[2];
  soldOut = data.isSoldOut;
  productThumbnailEl.innerHTML = `<img class="productImg" src="${data.thumbnail}" alt="상품 이미지" />`;
  photoEl.innerHTML = `<img class="photo_Img" src="${data.photo}" alt="상세 이미지" />`;
}
