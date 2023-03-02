import { authCheck } from "../../source/api/certified/authcheck_api.js";
import { router } from "../../source/route.js";

export async function orderCompletedHandler() {
  const auth = await authCheck(JSON.parse(localStorage.getItem("accessToken")));
  const bank = JSON.parse(localStorage.getItem("bank"));
  const item = JSON.parse(localStorage.getItem("payment"));

  const nameEl = document.querySelector(".content_name");
  const dateEl = document.querySelector(".content_date");
  const infoEl = document.querySelector(".content_info");
  const listEl = document.querySelector(".content_list");
  const mypageBtnEl = document.querySelector(".content_mypagebtn");
  const homeBtnEl = document.querySelector(".content_homebtn");

  nameEl.innerHTML = `주문자 ${auth.displayName}님 ${auth.email}`;
  dateEl.innerHTML = `주문일자 ${new Date().toLocaleDateString()}`;
  infoEl.innerHTML = `결제정보 ${bank.bankName} ${bank.accountNumber} ${
    bank.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₩"
  }`;
  listEl.innerHTML = `주문상품 ${item.length}개의 상품`;

  mypageBtnEl.addEventListener("click", () => {
    removeItemStorage();
    router.navigate("/mypage");
  });
  homeBtnEl.addEventListener("click", () => {
    removeItemStorage();
    router.navigate("/");
  });

  // 아무 페이지나 이동해도 removeItemStorage가 실행되게 하기
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      removeItemStorage();
    });
  });

  // 뒤로가기 이벤트를 감지하는 함수
  window.onpopstate = function (event) {
    // 브라우저의 히스토리에서 현재 페이지를 제거
    window.history.pushState(null, null, window.location.href);
    // 사용자에게 경고창을 띄움
    alert("결제가 완료되었습니다.");
  };
  // 초기 페이지 로딩시 브라우저 히스토리에 현재 페이지를 추가
  window.history.pushState(null, null, window.location.href);

  function removeItemStorage() {
    localStorage.removeItem("basket");
    localStorage.removeItem("payment");
    localStorage.removeItem("bank");
  }
}