import "../../scss/style.scss";
import "../../scss/user/main.scss";

import { allProduct } from "../../source/api/products/admin/allProduct_api.js";
// import { productItem } from "../../source/js/product_details.js";
import { router } from "../../source/route.js";

export function mainRender() {
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
      <div class="container">
        <div class="main">
          <section class="swiper banner">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <img src="./image/image1 (11).jpg" alt="배너" />
              </li>
              <li class="swiper-slide">
                <img src="./image/U1 (12).jpg" alt="배너" />
              </li>
              <li class="swiper-slide">
                <img src="./image/U1 (13).jpg" alt="배너" />
              </li>
            </ul>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </section>
          <div class="inner">
            <section class="list_section">
              <h2>지금 가장 한한 상품</h2>
              <div class="list_main">
                <img class="list_main_img" />
              </div>
              <ul class="list_product"></ul>
            </section>
            <section class="list_brand">
              <h2>인기 브랜드</h2>
              <div class="swiper brand">
                <ul class="swiper-wrapper brand_ul">
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="../image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                </ul>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </section>
            <section class="list_section">
              <h2>전문가의 선택, MD 추천 상품</h2>
              <ul class="list_product"></ul>
              <div class="list_main">
                <img src="./image/K1 (13).jpg" alt="이미지" />
              </div>
            </section>
            <section class="new_section">
              <h2>새로운 발견, 신상품</h2>
              <ul class="list_product"></ul>
            </section>
            <section class="plan_section">
              <h2>기획전</h2>
              <ul class="plan_list">
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
`;

  const banner = new Swiper(".banner", {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const brand = new Swiper(".brand", {
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  (async () => {
    const datas = await allProduct();
    mainItem(datas);
  })();

  async function mainItem(datas) {
    const ulList = document.querySelector(".list_product");

    const liEl = datas.map((data) => {
      const listEl = document.createElement("li");
      listEl.classList.add("product_list_item");
      if (data.thumbnail == null) {
        listEl.innerHTML = `<img src="" alt="이미지"/>`;
      } else {
        listEl.innerHTML = `<img src="${data.thumbnail}" alt="이미지"/>`;
      }

      listEl.addEventListener("click", () => {
        localStorage.setItem("id", JSON.stringify(data.id));
        // router.navigate(`/product_details/${data.id}`);
      });

      return listEl;
    });
    liEl.forEach((item) => {
      ulList.append(item);
    });
  }
}
//  function routeDetailPage(id) {
//    router.navigate(`/product/detail/${id}`);
//  }
