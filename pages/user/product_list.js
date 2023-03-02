import { productRender } from "../../source/js/product_list";

export function productListRender(category) {
  const app = document.querySelector("#app");
  app.innerHTML = /*html*/ `
  <div class="product_wrap">
    <div class="inner">
      <!-- 카테고리 제목 -->
      <h1 class="category">${category}<span> &gt;</span></h1>
      <section class="products">
        <div class="dot-wrap">
          <div class="dot-spinner"></div>
        </div>
        <ul class="products_lists">
        </ul>
      </section>
    </div>
  </div>
  `
  productRender('', [category]);
}












        // <li>
        //   <a href="javascript:void(0)" class="product">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-solid fa-heart"></i>
        //   </div>
        // </li>
        // <li>
        //   <a href="javascript:void(0)" class="product soldout">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-regular fa-heart"></i>
        //   </div>
        // </li>
        // <li>
        //   <a href="javascript:void(0)" class="product">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-regular fa-heart"></i>
        //   </div>
        // </li>
        // <li>
        //   <a href="javascript:void(0)" class="product">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-regular fa-heart"></i>
        //   </div>
        // </li>
        // <li>
        //   <a href="javascript:void(0)" class="product">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-regular fa-heart"></i>
        //   </div>
        // </li>
        // <li>
        //   <a href="javascript:void(0)" class="product">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-regular fa-heart"></i>
        //   </div>
        // </li>
        // <li>
        //   <a href="javascript:void(0)" class="product">
        //     <div class="product_img">
        //       <img src="../../image/g1.jpg" alt="product">
        //     </div>
        //     <p class="product_name">할일도많은안경</p>
        //     <p class="product_code">C818-0000</p>
        //     <p class="product_discription">할일이너무많아도대체뭐가이렇게할게많은거야머리아파죽겠네으아아아악</p>
        //     <p class="product_price"> 1,111,111 <span class="product_price_sale">54%</span></p>
        //   </a>
        //   <div class="icons">
        //     <i class="fa-regular fa-heart"></i>
        //   </div>
        // </li> -->