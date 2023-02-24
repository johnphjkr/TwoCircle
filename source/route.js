

import Navigo from "navigo";
import { mainRender } from "../pages/user/main.js";
import { loginRender } from "../pages/user/login.js";
import { signupRender } from "../pages/user/signup";
// import { productDetailRender } from "./js/product_details.js";
import { paymentRender } from "./js/payment.js";

const router = new Navigo("/");

router.hooks({
  after: (match) => {
    window.scroll(0,0);
  }
})
router.on(
  {
    "/" : () => {
      mainRender();
    },
    "/login": () => {loginRender()},
    "/signup" : () => {signupRender()}
}).resolve();
// router.on("/product/detail/:productId", function (data) {
//   productDetailRender(data);
// });
// router.resolve();

export {router}
