import { mainRender } from "./main.js";
import { loginRender } from "./js/login.js";
import { productDetailRender } from "./js/product_details.js";
import { paymentRender } from "./js/payment.js";

const id = JSON.parse(localStorage.getItem("id"));
const pages = [
  { path: "#/main", template: mainRender },
  { path: "#/login", template: loginRender },
  { path: "#/product_details/" + id, template: productDetailRender },
  { path: "#/paymeny", template: paymentRender },
];
const appEl = document.querySelector("#app");
const pageRender = () => {
  const page = pages.find((page) => page.path === location.hash);
  appEl.innerHTML = page ? page.template : mainRender;
};
window.addEventListener("hashchange", pageRender);
pageRender();
