import {
  productDataHandler,
  transactionDataHandler,
} from "../admin/admin_products_data.js";


export async function dashBoardHandler() {
  const { sunGlass, goggles, glassesFrame, best, newItem, md } = await productDataHandler();
  // const transaction = await transactionDataHandler();

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
}