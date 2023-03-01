import { router } from "../../source/route.js";

export async function productDetailHandler(id) {
  const stockEl = document.querySelector(".stock_text");
  let countTotalPriceEl = document.querySelector(".count_totalprice");
  let countEl = document.querySelector(".count");
  const minusBtnEl = document.querySelector(".btn_minus");
  const plusBtnEl = document.querySelector(".btn_plus");
  const heartBtnEl = document.querySelector(".btn_heart");
  const basketBtnEl = document.querySelector(".btn_basket");
  const purchaseBtnEl = document.querySelector(".productInfo_btn_purchase");
  const bigTagEl = document.querySelector(".bigtag");
  const midTagEl = document.querySelector(".midtag");
  const smallTagEl = document.querySelector(".smalltag");
  const discountEl = document.querySelector(".product_info_discount");
  const discountPriceEl = document.querySelector(".option_content_discount");
  let soldOut = true;
  let countTotalPrice = id.price * ((100 - id.discountRate) * 0.01);
  discountPriceEl.innerHTML =
    Math.round(id.price * ((100 - id.discountRate) * 0.01))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₩";
  countEl.value = 1;
  countEl.innerHTML = countEl.value;

  // 수량 버튼
  minusBtnEl.addEventListener("click", () => {
    if (countEl.value > 1) {
      countEl.value--;
      countEl.innerHTML = countEl.value;
      countTotalPrice = Math.round(
        countEl.value * id.price * ((100 - id.discountRate) * 0.01)
      );
      countTotalPriceEl.innerHTML =
        countTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₩";
    }
  });

  plusBtnEl.addEventListener("click", () => {
    countEl.value++;
    countEl.innerHTML = countEl.value;
    countTotalPrice = Math.round(
      countEl.value * id.price * ((100 - id.discountRate) * 0.01)
    );
    countTotalPriceEl.innerHTML =
      countTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₩";
  });

  // 찜 버튼
  let wishList = JSON.parse(localStorage.getItem("wish"))
    ? JSON.parse(localStorage.getItem("wish"))
    : [];
  const isCartItem = wishList.find((wish) => wish.id === id.id);
  heartBtnEl.innerHTML = /*html*/ `
  <div class="favorite_icons">
    <i class="${
      isCartItem ? "fa-solid" : "fa-regular"
    } fa-heart favorite"></i><p class="favorite_text">찜</p>
  </div>
`;
  const favoriteEl = heartBtnEl.querySelector(".favorite");
  heartBtnEl.addEventListener("click", () => {
    const isCart = wishList.find((wish) => wish.id === id.id);
    favoriteEl.classList.toggle("fa-regular", isCart);
    favoriteEl.classList.toggle("fa-solid", !isCart);
    if (isCart) {
      wishList = wishList.filter((wish) => wish.id !== id.id);
      localStorage.setItem("wish", JSON.stringify(wishList));
      return;
    }
    const wishEl = {
      id: id.id,
      price: id.price,
      thumbnail: id.thumbnail,
      title: id.title,
      discountRate: id.discountRate,
      description: id.description,
    };
    wishList.push(wishEl);
    localStorage.setItem("wish", JSON.stringify(wishList));
  });

  // 할인 유무
  if (id.discountRate === "") {
    discountEl.innerHTML = "할인 불가";
  } else {
    discountEl.innerHTML = "할인율 " + `${id.discountRate}` + "%";
  }

  // 품절유무
  soldOut ? (stockEl.innerHTML = "재고있음") : (stockEl.innerHTML = "품절");

  if (id.tags[2] === undefined) {
    smallTagEl.style.display = "none";
    midTagEl.innerHTML = `${id.tags[1]}`;
    bigTagEl.innerHTML = `${id.tags[0]} >`;
    midTagEl.style.color = "#181818";
  }
  if (id.tags[1] === undefined) {
    smallTagEl.style.display = "none";
    midTagEl.style.display = "none";
    bigTagEl.innerHTML = `${id.tags[0]}`;
    bigTagEl.style.color = "#181818";
  }
  if (id.tags[0] === undefined) {
    smallTagEl.style.display = "none";
    midTagEl.style.display = "none";
    bigTagEl.style.display = "none";
  }

  // 장바구니
  basketBtnEl.addEventListener("click", () => {
    const itemEl = {
      id: id.id,
      count: countEl.value,
      price: id.price,
      totalPrice: countTotalPrice,
      thumbnail: id.thumbnail,
      title: id.title,
      discountRate: Number(id.discountRate),
      description: id.description,
    };
    let basketEl = JSON.parse(localStorage.getItem("basket"));
    if (basketEl === null) {
      basketEl = [];
    }

    const existId = basketEl.find((item) => item.id === itemEl.id);

    if (existId) {
      existId.count += parseInt(itemEl.count);
    } else {
      basketEl.push(itemEl);
    }
    localStorage.setItem("basket", JSON.stringify(basketEl));
    alert("장바구니에 담겼습니다.");
  });

  purchaseBtnEl.addEventListener("click", () => {
    const itemEl = {
      id: id.id,
      count: countEl.value,
      price: id.price,
      totalPrice: countTotalPrice,
      thumbnail: id.thumbnail,
      title: id.title,
      discountRate: Number(id.discountRate),
      description: id.description,
    };
    let basketEl = JSON.parse(localStorage.getItem("basket"));
    if (basketEl === null) {
      basketEl = [];
    }

    const existId = basketEl.find((item) => item.id === itemEl.id);

    if (existId) {
      existId.count += parseInt(itemEl.count);
    } else {
      basketEl.push(itemEl);
    }
    localStorage.setItem("basket", JSON.stringify(basketEl));

    if (confirm("구매하시겠습니까?")) {
      router.navigate("/payment");
    } else {
      return;
    }
  });
}
