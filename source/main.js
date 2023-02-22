import { productDetail } from "./api/products/common/product_detail_api.js";
import { allProduct } from "./api/products/admin/allProduct_api.js";
import { productItem } from "./js/product_details.js";

const banner = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const brand = new Swiper(".brand", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export const mainRender = /* html */ `
<div id="wrap">
      <header>
        <div class="header_top">
          <div class="inner">
            <div class="header_top_right">
              <div class="header_login">
                <a href="#/login">로그인</a>
                <a href="#">회원가입</a>
              </div>
              <div class="header_logout">
                <p>ㅇㅇㅇ님, 안녕하세요</p>
                <p>로그아웃</p>
              </div>
            </div>
          </div>
        </div>
        <div class="header">
          <div class="inner">
            <h1 class="logo">
              <a href="#">
                <img src="./image/logo.png" alt="two circle" />
              </a>
            </h1>
            <div class="search">
              <input type="text" />
              <img class="search_icon" src="./image/search_icon.svg"></img>
            </div>
            <ul class="header_right">
              <li>
                <a href="#">
                  <img src="./image/mypage_icon.svg" alt="마이페이지" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span>0</span>
                  <img src="./image/cart_icon.svg" alt="장바구니" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span>0</span>
                  <img src="./image/heart_icon.svg" alt="찜하기" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div class="inner">
            <ul class="nav">
              <li>
                <a href="#">안경테</a>
              </li>
              <li>
                <a href="#">선글라스</a>
              </li>
              <li>
                <a href="#">브랜드</a>
              </li>
              <li>
                <a href="#">베스트</a>
              </li>
              <li>
                <a href="#">신상품</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container">
        <div class="main">
          <section class="swiper banner">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <img src="./image/U1 (11).jpg" alt="배너" />
              </li>
              <li class="swiper-slide">
                <img src="./image/U1 (12).jpg" alt="배너" />
              </li>
              <li class="swiper-slide">
                <img src="./image/U1 (13).jpg" alt="배너" />
              </li>
            </ul>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </section>
          <div class="inner">
            <section class="list_section">
              <h2>지금 가장 한한 상품</h2>
              <div class="list_main">
                <img src="./image/K1 (13).jpg" alt="메인 이미지" />
              </div>
              <ul class="list_product">
                         
              </ul>
            </section>
            <section class="list_brand">
              <h2>인기 브랜드</h2>
              <div class="swiper brand">
                <ul class="swiper-wrapper brand_ul">
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="brand_img">
                      <img src="./image/K1 (1).jpg" alt="브랜드" />
                    </div>
                    <div class="brand_text">
                      <p>ASHCROFT</p>
                      <span>CLASSES</span>
                    </div>
                  </li>
                </ul>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </section>
            <section class="list_section">
              <h2>전문가의 선택, MD 추천 상품</h2>
              <ul class="list_product">
               
              </ul>
              <div class="list_main">
                <img src="./image/K1 (13).jpg" alt="이미지" />
              </div>
            </section>
            <section class="new_section">
              <h2>새로운 발견, 신상품</h2>
              <ul class="list_product">
                
              </ul>
            </section>
            <section class="plan_section">
              <h2>기획전</h2>
              <ul class="plan_list">
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
                <li class="product_list_item">
                  <img src="./image/K1 (9).jpg" alt="기획" />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer_container">
          <div class="inner">
            <div class="footer_left">
              <h2><img src="./image/logo.png" alt="" /></h2>
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
                    <img src="./image/kcp_icon.png" alt="" />
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
    </div>
`;

(async () => {
  const datas = await allProduct();
  mainItem(datas);
})();

async function mainItem(datas) {
  const ulList = document.querySelector(".list_product");
  
  const liEl = datas.map((data) => {
    const listEl = document.createElement("li");
    listEl.classList.add("product_list_item");
    if (data.thumbnail == null) {
      listEl.innerHTML = `<a href="#/product_details/${data.id}"><img src="" alt="이미지"/></a>`;
    } else {
      listEl.innerHTML = `<a href="#/product_details/${data.id}"><img src="${data.thumbnail}" alt="이미지"/></a>`;
    }

    listEl.addEventListener("click", () => {  
      localStorage.setItem("id", JSON.stringify(data.id));
      productItem(data);
    });

    return listEl;
  });
  liEl.forEach((item) => {
    ulList.append(item);
  });
}
