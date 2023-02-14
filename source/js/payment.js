import { payment } from "../api/products/user/payment_api.js";

(async () => {
  const products = await payment();
  render(products);
})();

// 렌더링
async function render(data) {
}