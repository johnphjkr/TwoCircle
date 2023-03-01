import { router } from "../source/route";

export function headerRender(){
  const wrap = document.querySelector("#wrap")
  wrap.innerHTML = /*html*/`
  <header>
      <div class="header_top">
        <div class="inner">
          <div class="header_top_right">
            <div class="header_login">
              <a href="/login" data-navigo>로그인</a>
              <a href="/signup" data-navigo>회원가입</a>
            </div>
            <div class="header_logout">
              <p class="login_name">ㅇㅇㅇ님, 안녕하세요</p>
              <p class="logout_btn">로그아웃</p>
            </div>
          </div>
        </div>
      </div>
      <div class="header">
        <div class="inner">
          <h1 class="logo">
            <a href="/" data-navigo>
              <img class="header_logo" src="../image/logo.png" alt="로고" />
            </a>
          </h1>
          <form class="search">
            <input type="text" />
            <button>
              <img class="search_icon" src="../image/search_icon.svg"></img>
            </button>
          </form>
          <ul class="header_right">
            <li>
              <a id="mypageBtn" href="mypage" data-navigo>
                <img src="../image/mypage_icon.svg" alt="마이페이지" />
              </a>
            </li>
            <li>
              <a href="/cart" data-navigo>
                <span>0</span>
                <img src="../image/cart_icon.svg" alt="장바구니" />
              </a>
            </li>
            <li>
              <a href="/mypage/wish" data-navigo>
                <span>0</span>
                <img src="../image/heart_icon.svg" alt="찜하기" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div class="inner">
          <ul class="nav">
            <li>
              <a href="/product_list/안경테" data-navigo>안경테</a>
            </li>
            <li>
              <a href="/product_list/선글라스" data-navigo>선글라스</a>
            </li>
            <li>
              <a href="/product_list/고글" data-navigo>고글</a>
            </li>
            <li>
              <a href="/product_list/베스트" data-navigo>베스트</a>
            </li>
            <li>
              <a href="/product_list/신상품" data-navigo>신상품</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div id="app"></div>
    <footer>
      <div class="footer_container">
        <div class="inner">
          <div class="footer_left">
            <h2><img src="../image/logo.png" alt="" /></h2>
            <p>
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
            </p>
            <p class="footer_txt">
              <b>(주)TwoCircle</b>
              <span>대표 : T.C.</span>
              <br />
              <span>대표전화 : 1234-1234</span>
              <span>팩스 : 02-1234-1234</span>
              <br />
              <span>사업자 주소 : 서울특별시 강남구 강남대로 투써클빌딩 3층</span>
              <br />
              <span>사업자등록번호 : 123-12-12345</span>
            </p>
          </div>
          <div class="footer_right">
            <div class="footer_cs">
              <h3>CS CENTER</h3>
              <h4>1234-1234</h4>
              <p>
                cs@twocircle.com
                <br />
                고객센터 : 평일 오전 10시 ~ 오후 5시
                <br />
                (설, 추석 당일 휴무)
              </p>
            </div>
            <div class="footer_bank">
              <h3>BANK INFO</h3>
              <h4>예금주 : (주)투써클</h4>
              <p class="footer_txt">
                국민은행 012123-02-00123
                <br />
                신한은행 012123-02-00123
                <br />
                하나은행 012123-02-00123
                <br />
                기업은행 012123-02-00123
              </p>
            </div>
            <div class="footer_sns_box">
              <h3>SNS</h3>
              <ul class="footer_sns">
                <li class="product_list_item">
                  <img src="../image/kcp_icon.png" alt="" />
                </li>
                <li class="product_list_item">
                  <a href="https://www.facebook.com" class="facebook"> </a>
                </li>
                <li class="product_list_item">
                  <a href="https://www.instagram.com" class="insta"> </a>
                </li>
                <li class="product_list_item">
                  <a href="https://github.com/TwoCircle-Team5/TwoCircle" class="git">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_copy">
        <div class="inner">
          <p>©two circle. all right reserved</p>
        </div>
      </div>
    </footer>
  `
  const search = document.querySelector('.search');
  const searchInput = document.querySelector('.search input');
  
  search.addEventListener('submit', (e) => {
    e.preventDefault();
    router.navigate(`product_search/${searchInput.value}`);
  })
}