const basket = [
  {
    id: "0kHudsKUnTQDUnZZyMea",
    title: "좋은안경",
    price: 1234500,
    description: "안경입니다",
    tags: ["home", "안경", "좋은안경"],
    thumbnail: null,
    isSoldOut: false,
    discountRate: 20,
  },
  {
    id: "2nRsLKuvEQ5YMLE8XxVR",
    title: "안경일까요?",
    price: 30000,
    description: "가성비맞나?",
    tags: "수정, 완료?, ㅇㅇ",
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vVkKbQCvYnv065930.jpg",
    isSoldOut: true,
    discountRate: "10",
  },
  {
    id: "7yrX7CgUJf3kPydnlSSL",
    title: "MacBook Pro 15",
    price: 336000,
    description: "맥북 프로",
    tags: ["가전", "노트북", "컴퓨터"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vvKxwCnYv1v123002.jpg",
    isSoldOut: false,
    discountRate: 0,
  },
  {
    id: "9IBIa3wihE39BlKDAdNH",
    title: "좋은안경",
    price: 1234500,
    description: "안경입니다",
    tags: ["home", "안경", "좋은안경"],
    thumbnail: null,
    isSoldOut: false,
    discountRate: 20,
  },
  {
    id: "K8mwTA6OOAJqHWVomLep",
    title: "MacBook Pro 14",
    price: 336000,
    description: "맥북 프로",
    tags: ["가전", "노트북", "컴퓨터"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vJi8fa7GDLv125410.jpg",
    isSoldOut: false,
    discountRate: 0,
  },
  {
    id: "LQwuYew4u1D9kyOjlHYl",
    title: "테스트안경",
    price: 200,
    description: "테스트 안경입니다",
    tags: ["home", "안경", "좋은안경"],
    thumbnail: null,
    isSoldOut: false,
    discountRate: 20,
  },
  {
    id: "UD2jvZma84heOYsLtQpq",
    title: "기타",
    price: 1000,
    description: "기타상품",
    tags: "",
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vaspLFQHnHv080434.jpg",
    isSoldOut: false,
    discountRate: "",
  },
  {
    id: "XZQoGgab1XfMZ3WYSMJA",
    title: "할 일도 많은 안경/c818-0000",
    price: 1111111,
    description:
      "할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악",
    tags: ["고글"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vCd1D2dHwrv050925.jpg",
    isSoldOut: false,
    discountRate: 22,
  },
  {
    id: "abfv5hlcFwuUUa7ebBgD",
    title: "할 일도 많은 안경/c818-0000",
    price: 1111111,
    description:
      "할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악",
    tags: "고글",
    thumbnail:
      "https://storage.googleapis.com/heropy-api/v8vDC-57zDv050810.jpg",
    isSoldOut: false,
    discountRate: 22,
  },
  {
    id: "audqPDaqAXwwQ6elVv7W",
    title: "좋은안경",
    price: 100,
    description: "안경입니다",
    tags: ["home", "안경", "좋은안경"],
    thumbnail: null,
    isSoldOut: false,
    discountRate: 20,
  },
  {
    id: "dlwADTARTJKo1ZgipoIe",
    title: "선글라스",
    price: 15000,
    description: "선글라스 입니다.",
    tags: "선글라스, 신상품, 베스트",
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vGMoyP0eqPv084715.jpg",
    isSoldOut: false,
    discountRate: "20",
  },
  {
    id: "fGPDTHbBNdHZaLZuQhCn",
    title: "파란",
    price: 1000,
    description: "테스트",
    tags: "",
    thumbnail: null,
    isSoldOut: false,
    discountRate: "",
  },
  {
    id: "fVvTWK5CLb5ZCHVPWUuD",
    title: "할 일도 많은 안경/c818-0000",
    price: 1111111,
    description:
      "할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악",
    tags: "",
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vIqPMURFg8v050407.jpg",
    isSoldOut: false,
    discountRate: 22,
  },
  {
    id: "kR8ROejubaaO4fvKk1fx",
    title: "보라고글",
    price: 10000,
    description: "보라색입니다",
    tags: "",
    thumbnail: null,
    isSoldOut: false,
    discountRate: "",
  },
  {
    id: "lWgM75SWGC3cUth6DRkS",
    title: "빨간고글",
    price: 10000,
    description: "테스트....",
    tags: "테스트",
    thumbnail: null,
    isSoldOut: false,
    discountRate: "",
  },
  {
    id: "oKmbvlL0RfZxlhYwj1Xl",
    title: "MacBook Pro 13",
    price: 336000,
    description: "맥북 프로",
    tags: ["가전", "노트북", "컴퓨터"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vNJJw2IJRav083431.jpg",
    isSoldOut: false,
    discountRate: 0,
  },
  {
    id: "rE94XNqV0h2HOPRQJZos",
    title: "무지개...",
    price: 40000,
    description: "무지개....",
    tags: "",
    thumbnail:
      "https://storage.googleapis.com/heropy-api/v8XxEzNo0Ov083016.jpg",
    isSoldOut: false,
    discountRate: "",
  },
  {
    id: "rU0CHzBffhAeKyWj7fr8",
    title: "MacBook Pro 16",
    price: 3360000,
    description: "맥북 프로",
    tags: ["가전", "노트북", "컴퓨터"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vXK4cpjC3Wv122942.jpg",
    isSoldOut: false,
    discountRate: 0,
  },
  {
    id: "sJ5KUaGHpC9IF912X8Xn",
    title: "MacBook Pro 16",
    price: 3360000,
    description: "맥북 프로",
    tags: ["가전", "노트북", "컴퓨터"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vGWJEFWBbmv122119.jpg",
    isSoldOut: false,
    discountRate: 0,
  },
  {
    id: "uHsvUNSFR4hnT34iwOUk",
    title: "할 일도 많은 안경/c818-0000",
    price: 1111111,
    description:
      "할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악",
    tags: ["고글"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vx4j77IpkZv071758.jpg",
    isSoldOut: false,
    discountRate: 22,
  },
  {
    id: "xn4dIR5bxVwUPgvH3ilS",
    title: "MacBook Pro 12",
    price: 336000,
    description: "맥북 프로",
    tags: ["가전", "노트북", "컴퓨터"],
    thumbnail:
      "https://storage.googleapis.com/heropy-api/vQHdbujnVov083437.jpg",
    isSoldOut: false,
    discountRate: 0,
  },
];

localStorage.setItem("basket", JSON.stringify(basket));

const basketItem = JSON.parse(localStorage.getItem("basket"));

const renderCartList = (basketItem) => {
  const ulEl = document.querySelector(".cart_list");
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
                          <span class="amount">1</span>
                          <button class="increase_btn">+</button>
                        </div>

                        <div class="price_wrap">
                          <span class="price">${item.price}</span>
                        </div>
                      </div>                            
        `;
  return liEl
  });
  ulEl.innerHTML = ''
  ulEl.append(...liEls)
};

renderCartList(basketItem)