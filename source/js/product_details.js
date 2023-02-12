import { productDetail } from "../api/products/common/product_detail_api.js";

const productTitleEl = document.querySelector(".product_info_title");
const soldOutEl = document.querySelector(".stock_text");
const productInfoPriceEl = document.querySelector(".product_info_price");
const optionContentPriceEl = document.querySelector(".option_content_price");
const countTotalPriceEl = document.querySelector(".count_totalprice");
const productDescriptionEl = document.querySelector(".box_option");
const productTagEl = document.querySelector(".product_tag");
const productThumbnailEl = document.querySelector(
  ".container_content_productImg"
);
let countEl = document.querySelector(".count");
const productPhotoEl = document.querySelector(".product_photo");
const minusBtnEl = document.querySelector(".btn_minus");
const plusBtnEl = document.querySelector(".btn_plus");
const heartBtnEl = document.querySelector(".btn_heart");
const basketBtnEl = document.querySelector(".btn_basket");
const purchaseBtnEl = document.querySelector(".productInfo_btn_purchase");

countEl.value = 1;

minusBtnEl.addEventListener("click", async () => {
  if (preventDoubleClick) return;
  preventDoubleClick = true;
  if (countEl.value > 1) {
    countEl.value--;
    countTotalPriceEl.innerHTML = (
      Number(countEl.value) * Number(optionContentPriceEl.textContent)
    ).toLocaleString();
  }
  preventDoubleClick = false;
});

plusBtnEl.addEventListener("click", async () => {
  if (preventDoubleClick) return;
  preventDoubleClick = true;
  countEl.value++;
  countTotalPriceEl.innerHTML = (
    Number(countEl.value) * Number(optionContentPriceEl.textContent)
  ).toLocaleString();
  preventDoubleClick = false;
});






// 렌더에서 다 뿌려줘야 할듯
// async function RenderProduct() {
//   const product = await productDetail();
//   productTitleEl.textContent = product.title;
// }
