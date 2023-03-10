import { productDataHandler } from "../admin/admin_products_data.js";
import { transactionDetail } from "../../api/products/admin/product_transactions_api.js";
import { allProduct } from "../../api/products/admin/allProduct_api.js";
import { userlist } from "../../api/products/admin/user_list_api.js";

export async function dashBoardHandler() {
  const { sunGlass, goggles, glassesFrame, best, newItem, md } =
    await productDataHandler();
  const products = await allProduct();
  const users = await userlist();
  const items = await transactionDetail();
  const dot = document.querySelector(".dot-wrap");
  const prevEl = document.querySelector(".pagination_prev");
  const nextEl = document.querySelector(".pagination_next");
  // 차트를 그릴 캔버스 요소
  const canvas = document.querySelector("#myChart");

  // 데이터
  const data = {
    labels: ["선글라스", "고글", "안경테", "베스트", "신상품", "MD상품"],
    datasets: [
      {
        label: "수량",
        data: [
          sunGlass.length,
          goggles.length,
          glassesFrame.length,
          best.length,
          newItem.length,
          md.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // 차트 객체 생성
  const myChart = new Chart(canvas, {
    type: "bar",
    data: data,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  let index = 0;
  let sum = 0;
  const liEl = items.map((item) => {
    const listEl = document.createElement("div");
    listEl.classList.add("list");
    const numberEl = document.createElement("div");
    const dateEl = document.createElement("div");
    const userEl = document.createElement("div");
    const bankEl = document.createElement("div");
    const salePriceEl = document.createElement("div");
    const itemEl = document.createElement("div");
    const cancelPriceEl = document.createElement("div");
    const totalPriceEl = document.createElement("div");

    numberEl.classList.add("content_number");
    dateEl.classList.add("content_date");
    userEl.classList.add("content_user");
    bankEl.classList.add("content_bank");
    salePriceEl.classList.add("content_saleprice");
    itemEl.classList.add("content_item");
    cancelPriceEl.classList.add("content_cancelprice");
    totalPriceEl.classList.add("content_totalprice");

    numberEl.innerHTML = `<div>${index + 1}</div>`;
    const formattedTimePaid = item.timePaid.replace(
      /T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      " "
    );
    dateEl.innerHTML = `<div>${formattedTimePaid}</div>`;
    userEl.innerHTML = `<div>${item.user.email}</div>`;
    bankEl.innerHTML = `<div>${item.account.bankName}</div>`;

    const originalPrice = item.product.price;
    const discountRate = item.product.discountRate;
    const discountedPrice = discountRate
      ? originalPrice * ((100 - discountRate) * 0.01)
      : originalPrice;
    const formattedDiscountedPrice = discountedPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    salePriceEl.innerHTML = `<div>${formattedDiscountedPrice}원</div>`;

    const formattedTitle = item.product.title.replace(/\/.*/, "");
    itemEl.innerHTML = `<div>${formattedTitle}</div>`;

    if (item.isCanceled) {
      salePriceEl.innerHTML = "<div>0원</div>";
      const cancelPrice = discountRate
        ? -1 * originalPrice * ((100 - discountRate) * 0.01)
        : -1 * originalPrice;
      const formattedCancelPrice = cancelPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      cancelPriceEl.innerHTML = `<div>${formattedCancelPrice}원</div>`;
      totalPriceEl.innerHTML = `<div>${formattedCancelPrice}원</div>`;
      totalPriceEl.style.color = "blue";
      sum += cancelPrice;
    } else {
      cancelPriceEl.innerHTML = "<div>0원</div>";
      totalPriceEl.innerHTML = `+<div>${formattedDiscountedPrice}원</div>`;
      totalPriceEl.style.color = "red";
      sum += discountedPrice;
    }

    if (item.user.email !== "admin@naver.com") {
      listEl.append(
        numberEl,
        dateEl,
        userEl,
        bankEl,
        salePriceEl,
        itemEl,
        cancelPriceEl,
        totalPriceEl
      );
      index++;
    } else {
      return [];
    }
    return listEl;
  });

  const tableEl = document.querySelector(".table_content");
  tableEl.append(...liEl);

  const itemCountEl = document.querySelector(".summary_itemcount");
  const saleSumEl = document.querySelector(".summary_salesum");
  const memberEl = document.querySelector(".summary_member");
  itemCountEl.append(`판매 상품 갯수 : ${products.length}개`);
  saleSumEl.append(
    `총 판매 매출 : ${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
  );
  memberEl.append(`회원 수 : ${users.length}명`);

  

  prevEl.addEventListener("click", () => {});
  nextEl.addEventListener("click", () => {});

  dot.style.display = "none";
}
