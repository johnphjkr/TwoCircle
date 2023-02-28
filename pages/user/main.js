import { searchProduct } from "../../source/api/products/user/product_search.js";

export function mainRender() {
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
      <div class="container">
        <div class="main">
          <section class="swiper banner">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <img src="./image/U1 (11).jpg" alt="배너" />
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
            <section class="best_list list_section">
              <h2>지금 가장 핫한 상품</h2>
              <div class="list_main">
                <img src="./image/K1 (13).jpg" alt="이미지" />
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
            <section class="md_list list_section">
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

  async function productImport(tag) {
    const body = {
      "searchTags": [...tag]
    };
    const datas = await searchProduct(body);
    // mainProduct(datas);
    return datas;
  }

  (async () => {
    const bestList = await productImport(["best"]);
    const mdList = await productImport(["md"]);
    const newList = await productImport(["new"]);

    const bestEl = document.querySelector('.best_list .list_product');
    const mdEl = document.querySelector('.md_list .list_product');
    const newEl = document.querySelector('.new_section .list_product');
    mainProduct(bestList, bestEl, 6);
    mainProduct(mdList, mdEl, 6);
    mainProduct(newList, newEl, 12);
  })();

  function mainProduct(datas, ulEl, num) {
    const liEls = datas.filter((data, index) => index < num).map((data) => {
      const liEl = document.createElement('li');
      liEl.dataset.id = data.id;
      const titleCode = data.title.split('/');

      liEl.innerHTML = /* html */ `
        <a href="/product_details/${data.id}" class="product">
          <div class="product_img">
            <img src=${data.thumbnail ? data.thumbnail : 'https://via.placeholder.com/200x200?text=NO+IMAGE'} alt="product">
          </div>
          <p class="product_name">${titleCode[0]}</p>
          <p class="product_code">${titleCode[1] !== undefined ? titleCode[1] : titleCode[0]}</p>
          <p class="product_discription">${data.description}</p>
          <p class="product_price">
            ${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 
            ${data.discountRate ? `<span class="product_price_sale">${data.discountRate}%</span>` : ""}
          </p>
        </a>
        <div class="icons">
          <i class="fa-regular fa-heart"></i>
        </div>
      `;

      return liEl;
    });
    ulEl.innerHTML = '';
    ulEl.append(...liEls);
  }
}
