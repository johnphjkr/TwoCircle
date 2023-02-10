const productTitleEl = document.querySelector(".product_info_title");

async function RenderProduct() {
  const product = await getProduct();
  productTitleEl.textContent = product.title;
}