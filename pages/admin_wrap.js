export function adminWrap() {
  const wrap = document.querySelector("#wrap");
  wrap.innerHTML = /* html */ `
    <header>
      <div class="top">
        <h1 class="logo">
          <a href="/" data-navigo><img src="../image/logo.png" alt="로고"
          /></a>
        </h1>
        <div class="top_inner">
          <span class="email">admin@naver.com</span>
          <span class="log_out">로그아웃</span>
        </div>
      </div>
    </header>
    <div class="admin_container">
      <div class="menu">
        <ul class="menu_list">
          <li class="now_page">
            <a href="admin" data-navigo>상품 리스트</a>
          </li>
          <li><a href="admin/product_add" data-navigo>상품추가</a></li>
        </ul>
      </div>
      <div id="admin"></div>
    </div>
  `;
}