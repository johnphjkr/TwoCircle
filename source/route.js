import Navigo from "navigo";

import { authCheck } from "./api/certified/authcheck_api.js";

// 페이지
import { mainRender } from "../pages/user/main.js";
import { loginRender } from "../pages/user/login.js";
import { signupRender } from "../pages/user/signup";
import { navRender, mypageRender } from "../pages/user/mypage";
import { wishRender } from "../pages/user/wish_list";
import { purchaseRender } from "../pages/user/purchase_history";
import { cartRender } from "../pages/user/cart";
import { productDetailRender } from "../pages/user/product_details.js";
import { paymentRender } from "../pages/user/payment.js";

const router = new Navigo("/");

router.hooks({
  before: async (done, match) => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const auth = await authCheck(accessToken);
    if (auth) {
      console.log("[auth sucess]", { user: auth });
    }
    done();
  },
  after: (match) => {
    window.scroll(0, 0);
  },
});
router
  .on({
    "/": () => {
      mainRender();
    },
    login: () => {
      loginRender();
    },
    signup: () => {
      signupRender();
    },
    cart: () => {
      cartRender();
    },
    mypage: () => {
      navRender();
      mypageRender();
    },
    "mypage/wish": () => {
      navRender();
      wishRender();
    },
    "mypage/purchase": () => {
      navRender();
      purchaseRender();
    },
    "/product_details/:id": (data) => {
      productDetailRender(data);
    },
    "/payment": () => {
      paymentRender();
    },
  })
  .resolve();

export { router };
