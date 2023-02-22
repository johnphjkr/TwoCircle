

import Navigo from "navigo";
import { mainRender } from "../pages/user/main.js";
import { loginRender } from "../pages/user/login.js";
// import { productDetailRender } from "./js/product_details.js";
import { paymentRender } from "./js/payment.js";

export const router = new Navigo("/");
router.on("/", function () {
  mainRender();
});
router.on("/login", function () {
  loginRender();
});
// router.on("/product/detail/:productId", function (data) {
//   productDetailRender(data);
// });
router.resolve();
