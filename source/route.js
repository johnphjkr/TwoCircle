import Navigo from "navigo";

import { authCheck } from "./api/certified/authcheck_api.js";
import { logout } from "./api/certified/logout_api.js";

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
import { orderCompletedRender } from "../pages/user/order_completed.js";
import { accountRender } from "../pages/user/account";
import { productListRender } from "../pages/user/product_list.js";
import { productRender } from "./js/product_list.js";


export const router = new Navigo("/");

router.hooks({
  before: async (done, match) => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const auth = await authCheck(accessToken);
    const onlyUserPages = ["mypage", "mypage/wish", "cart", "account"];
    if (onlyUserPages.includes(match.url) && !auth) {
      router.navigate("login");
      done();
    }
    if ((match.url === "login" || match.url === "signup") && auth) {
      router.navigate("");
      done();

    }
    
    // 로그인 로그아웃시 헤더 변경
    const loginEl = document.querySelector('.header_login');
    const logoutEl = document.querySelector('.header_logout');
    const loginNameEl = document.querySelector('.login_name');
    const logoutBtn = document.querySelector('.logout_btn');
    if (auth) {
      console.log('[auth sucess]', { user: auth });
      loginEl.style.display = 'none';
      logoutEl.style.display = 'flex';
      loginNameEl.innerHTML = `${auth.displayName}님, 안녕하세요`;
      logoutBtn.addEventListener('click', async () => {
        await logout(accessToken);
        localStorage.removeItem("accessToken");
        loginEl.style.display = 'flex';
        logoutEl.style.display = 'none';
      });
    } else {
      loginEl.style.display = 'flex';
      logoutEl.style.display = 'none';
    }
    // router.navigate("/");
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
    "mypage/account": () => {
      navRender();
      accountRender();
    },
    "product_list/:id": (match) => {
      productListRender(match.data.id);
      productRender("", [match.data.id]);
    },
    "product_search/:id": (match) => {
      productListRender(match.data.id);
      productRender(match.data.id, []);
    },
    "/order_completed": () => {
      orderCompletedRender();
    },
    "product_details/:id": (match) => {
      productDetailRender(match);
    },
    "/payment": () => {
      paymentRender();
    },
    "/order_completed": () => {
      orderCompletedRender();
    },
  })
  .resolve();

const search = document.querySelector(".search");
const searchInput = document.querySelector(".search input")

search.addEventListener("submit",(e)=>{
  e.preventDefault()
  router.navigate(`product_search/${searchInput.value}`)
})
