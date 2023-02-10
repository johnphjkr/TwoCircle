import Navigo from "navigo";
import { Home } from "/index.html";

export const router = new Navigo("/");


router.on({
  "/": () => {
    renderPage(Home);
  },
});

function renderPage(html) {
  const page = document.querySelector("#app");
  page.innerHTML = html;
}
router.resolve();