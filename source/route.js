import Navigo from "navigo";

import { authCheck } from "./api/certified/authcheck_api.js";

// 페이지
import { mainRender } from "../pages/user/main.js";
import { loginRender } from "../pages/user/login.js";
import { signupRender } from "../pages/user/signup";
import { navRender, mypageRender } from "../pages/user/mypage";
import { wishRender } from "../pages/user/wish_list";
import { pruchaseRender } from "../pages/user/purchase_history";
import { cartRender } from "../pages/user/cart";
import { accountRender } from "../pages/user/account";
import { productListRender } from "../pages/user/product_list.js";
import { productRender } from "./js/product_list.js";
export const router = new Navigo("/");

router.hooks({
  before: async (done, match) => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
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
    done();
  },
  after: (match) => {
    window.scroll(0, 0);
    console.log(match.user);
  },
});
router
  .on({
    "/": () => {
      mainRender();
    },
    "login": () => {
      loginRender();
    },
    "signup": () => {
      signupRender();
    },
    "cart": () => {
      cartRender();
    },
    "mypage": () => {
      navRender();
      mypageRender();
    },
    "mypage/wish": () => {
      navRender();
      wishRender();
    },
    "mypage/purchase": () => {
      navRender();
      pruchaseRender();
    },
    "mypage/account": () => {
      navRender();
      accountRender();
    },
    "product_list/:id": (match) => {
      
      productListRender(match.data.id)
      productRender("",[match.data.id])
    },
    "product_search/:id":(match) => {
      productListRender(match.data.id)
      productRender(match.data.id,[])
    }
  })
  .resolve();

const search = document.querySelector(".search");
const searchInput = document.querySelector(".search input")

search.addEventListener("submit",(e)=>{
  e.preventDefault()
  router.navigate(`product_search/${searchInput.value}`)
})