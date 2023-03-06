import { wishRender } from "../../pages/user/wish_list";


export function renderWishList(wishList) {
  const ulEl = document.querySelector(".list");
  const liEls = wishList.map((wish) => {
    const isCartItem = wishList.find((wishItem) => wishItem.id === wish.id);
    const liEl = document.createElement("li");
    liEl.classList = "wish_item";
    liEl.dataset.id = wish.id;
    liEl.innerHTML = /*html*/ `
                    <a href="/product_details/${
                      wish.id
                    }" data-navigo class="wish product">
                    <div class="product_img">

                    ${
                      wish.thumbnail === null
                        ? `<img src=${"https://via.placeholder.com/200x200?text=NO+IMAGE"} alt="product">`
                        : `<img src=${wish.thumbnail} alt="product">`
                    }
                    <div class="icons">
                  <i class="${
                    isCartItem ? "fa-solid" : "fa-regular"
                  } fa-heart"></i>
                </div>

                  </div>
                  <p class="product_name">${wish.title}</p>
                  <p class="product_code">${
                    wish.title !== undefined ? wish.code : wish.title
                  }</p>
                  <p class="product_discription">${wish.description}</p>
                  <p class="product_price">${wish.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                  ${
                    wish.discountRate
                      ? `<span class="product_sale">${wish.discountRate}%</span>`
                      : ""
                  }
                
                  </p>
                </a>
                `;

    const iconsEl = liEl.querySelector(".icons");
  
    iconsEl.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      const iEl = e.target;

      const isCartItem = wishList.find((wishItem) => wishItem.id === wish.id);
      const heartNum = document.querySelector(".heart_num");

      iEl.classList.toggle("fa-regular", isCartItem);
      iEl.classList.toggle("fa-solid", !isCartItem);
      if (isCartItem) {
        wishList = wishList.filter((wishItem) => wishItem.id !== wish.id);
        localStorage.setItem("wish", JSON.stringify(wishList));
        if (localStorage.getItem("wish")) {
          heartNum.innerText = JSON.parse(localStorage.getItem("wish")).length;
        }
        wishRender()
        renderWishList(wishList);
        return;
      }
    });

    return liEl;
  });

  ulEl.innerHTML = "";
  ulEl.append(...liEls);
}
