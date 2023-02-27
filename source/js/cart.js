const ulEl = document.querySelector(".cart_list");
const totalCheckbox = document.querySelector(".info_total_checkbox");
const cancelBtn = document.querySelector(".cancel_btn");
const purchaseBtn = document.querySelector(".purchase_btn");

// const basket = [

//   {
//     id: "2nRsLKuvEQ5YMLE8XxVR",
//     title: "안경일까요?",
//     price: 30000,
//     description: "가성비맞나?",
//     tags: "수정, 완료?, ㅇㅇ",
//     amount:1,
//     thumbnail:
//       "https://storage.googleapis.com/heropy-api/vVkKbQCvYnv065930.jpg",
//     isSoldOut: true,
//     discountRate: "10",
//   },
//   {
//     id: "7yrX7CgUJf3kPydnlSSL",
//     title: "MacBook Pro 15",
//     price: 336000,
//     description: "맥북 프로",
//     amount:1,
//     tags: ["가전", "노트북", "컴퓨터"],
//     thumbnail:
//       "https://storage.googleapis.com/heropy-api/vvKxwCnYv1v123002.jpg",
//     isSoldOut: false,
//     discountRate: 0,
//   },
//   {
//     id: "9IBIa3wihE39BlKDAdNH",
//     title: "좋은안경",
//     price: 1234500,
//     description: "안경입니다",
//     amount:1,
//     tags: ["home", "안경", "좋은안경"],
//     thumbnail: null,
//     isSoldOut: false,
//     discountRate: 20,
//   },

// ];

// localStorage.setItem("basket", JSON.stringify(basket));

// 핸들러함수 만들기
const basketItem = JSON.parse(localStorage.getItem("basket"));

cancelBtn.addEventListener("click", () => {
  let cartItemList = [...basketItem];

  const selectedItemList = Array.from(
    document.querySelectorAll(".want_checkbox:checked")
  ).map((selectedInput) => selectedInput.closest(".cart_list_item").dataset.id);
  selectedItemList.forEach((id) => {
    cartItemList = cartItemList.filter((cartItem) => cartItem.id !== id);
  });

  localStorage.setItem("basket", JSON.stringify(cartItemList));
});

totalCheckbox.addEventListener("change", (e) => {
  const checkBox = ulEl.querySelectorAll(".want_checkbox");
  const { checked } = e.target;

  checkBox.forEach((item) => {
    if (checked) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
});

// async function getCartItems () {
//   return JSON.parse(localStorage.getItem("basket"));
// }

// console.log( getCartItems ())

// async function render() {

//   getCartItems().then(cartItems => {

//   })
// }

const renderCartList = () => {
  const liEls = basketItem.map((item) => {
    const liEl = document.createElement("li");

    liEl.dataset.id = item.id;
    liEl.classList = "cart_list_item";
    liEl.innerHTML = /*html*/ `
                     <div class="cart_card">
                        <div class="want_checkbox_wrap">
                          <input type="checkbox" class="want_checkbox" />
                        </div>
                        <div class="img_wrap">
                          <img
                            src=${item.thumbnail}
                            alt=""
                            class="card_img" />
                        </div>
                        <div class="product_name_wrap">
                          <span class="name"
                            >${item.title}</span
                          >
                        </div>
                        <div class="product_total_wrap">
                          <button class="decrease_btn">-</button>
                          <span class="amount">${item.amount}</span>
                          <button class="increase_btn">+</button>
                        </div>

                        <div class="price_wrap">
                          <span class="price">${item.price.toLocaleString(
                            "ko-KR"
                          )}</span>
                        </div>
                      </div>                            
        `;
    return liEl;
  });
  ulEl.innerHTML = "";
  ulEl.append(...liEls);
};

renderCartList();

const decreaseBtn = ulEl.querySelector(".decrease_btn");
const increaseBtn = ulEl.querySelector(".increase_btn");

decreaseBtn.addEventListener('click', () => {
  console.log('감소버튼 입니다.')
})

increaseBtn.addEventListener('click', () => {
  console.log('증가버튼 입니다')
})