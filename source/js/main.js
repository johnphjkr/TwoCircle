import { searchProduct } from "../../source/api/products/user/product_search.js";

async function productImport(tag) {
  const body = {
    "searchTags": [...tag]
  };
  const datas = await searchProduct(body);
  // mainProduct(datas);
  return datas;
}

export async function mainListRender() {
  const bestList = await productImport(["best"]);
  const mdList = await productImport(["md"]);
  const newList = await productImport(["new"]);

  const bestEl = document.querySelector('.best_list .list_product');
  const mdEl = document.querySelector('.md_list .list_product');
  const newEl = document.querySelector('.new_section .list_product');
  mainProduct(bestList, bestEl, 6);
  mainProduct(mdList, mdEl, 6);
  mainProduct(newList, newEl, 12);
};

function mainProduct(datas, ulEl, num) {
  let wishList = localStorage.getItem("wish")? JSON.parse(localStorage.getItem("wish")): [];
  const liEls = datas.filter((data, index) => index < num).map((data) => {
    const isCartItem = wishList.find((wishItem) => wishItem.id === data.id);
    const liEl = document.createElement('li');
    liEl.dataset.id = data.id;
    const titleCode = data.title.split('/');

    liEl.innerHTML = /* html */ `
        <a href="/product_details/${data.id}" class="data">
          <div class="product_img">
            <img src=${data.thumbnail ? data.thumbnail : 'https://via.placeholder.com/200x200?text=NO+IMAGE'} alt="data">
        <div class="icons">
          <i class="${ isCartItem ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </div>
          </div>
          <p class="product_name">${titleCode[0]}</p>
          <p class="product_code">${titleCode[1] !== undefined ? titleCode[1] : titleCode[0]}</p>
          <p class="product_discription">${data.description}</p>
          <p class="product_price">
            ${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 
            ${data.discountRate ? `<span class="product_price_sale">${data.discountRate}%</span>` : ""}
          </p>
        </a>
      `;

      const iconsEl = liEl.querySelector('.icons')
      iconsEl.addEventListener('click', (e)=> {
        e.preventDefault();
        const iEl = e.target

        const isCartItem = wishList.find((wishItem) => wishItem.id === data.id);
        const heartNum = document.querySelector(".heart_num");
        iEl.classList.toggle("fa-regular", isCartItem);
        iEl.classList.toggle("fa-solid", !isCartItem);

        if(isCartItem) {
         
          wishList = wishList.filter((wishItem) => wishItem.id !== data.id);

          localStorage.setItem("wish", JSON.stringify(wishList));
          heartNum.innerText = JSON.parse(localStorage.getItem("wish")).length;
          return;
     
        }
         
        const wish = {
          id: data.id,
          price: data.price,
          code: titleCode[1] !== undefined ? titleCode[1] : titleCode[0],
          thumbnail: data.thumbnail,
          title: titleCode[0],
          discountRate: data.discountRate,
          description: data.description,
        };
        wishList.push(wish);

        localStorage.setItem("wish", JSON.stringify(wishList));
        if (localStorage.getItem("wish")) {
          heartNum.innerText = JSON.parse(localStorage.getItem("wish")).length;
        }

      })

    return liEl;
  });
  ulEl.innerHTML = '';
  ulEl.append(...liEls);

  // SWIPER
  const banner = new Swiper(".banner", {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // const brand = new Swiper(".brand", {
  //   slidesPerView: 4,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
}