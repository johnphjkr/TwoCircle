import { searchProduct } from "../api/products/user/product_search"

(async () => {
  const body = {
    "searchText" : "",
    "searchTags" : ""
  }  
  const search = await searchProduct(body);
  rendProduct(search)
  console.log(search)
})()

// 상품목록 렌더링 과정
function rendProduct(product) {
  product.map(function(e){
    const ulEl = document.querySelector(".products_lists")
    const liEl = document.createElement("li")
    const aEl = document.createElement("a")
    const divEl = document.createElement("div")
    const imgEl = document.createElement("img")
    const pEl = document.createElement("p")
    const codeEl = document.createElement("p")
    const disEl = document.createElement("p")
    const priceEl = document.createElement("p")
    const spanEl = document.createElement("span")
    const iconEl = document.createElement("div")
    // 제목과 코드 분류
    const titleCode = e.title.split("/")
    // 상세페이지 링크
    aEl.setAttribute("href","javascript:void(0)")
    aEl.classList.add("product")
    // 썸네일 이미지
    divEl.classList.add("product_img")
    if(e.thumbnail != null){
      imgEl.setAttribute("src",e.thumbnail)
    }else{
      imgEl.setAttribute("src","https://via.placeholder.com/200x200?text=NO+IMAGE")
    }
    divEl.append(imgEl)
    // 제품 이름 및 코드
    pEl.classList.add("product_name")
    pEl.textContent=titleCode[0]
    codeEl.classList.add("product_code")
    if(titleCode[1] != undefined){
      codeEl.textContent=titleCode[1]
    }else{
      codeEl.textContent="0000-0000"
    }
    // 제품 설명
    disEl.classList.add("product_discription")
    disEl.textContent = e.description
    // 제품 가격
    priceEl.classList.add("product_price")
    priceEl.textContent = e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if(e.discountRate){
      spanEl.classList.add("product_price_sale")
      spanEl.textContent = ` ${e.discountRate}%`
      priceEl.append(spanEl)
    }
    // 찜 아이콘
    iconEl.classList.add("icons")
    iconEl.innerHTML = "<i class='fa-regular fa-heart'></i>"

    iconEl.addEventListener("click",(e)=>{
      const iEl = e.target
      console.log(e)
      if(iEl.classList.contains("fa-regular")){
        iEl.classList.replace("fa-regular","fa-solid")
      }else{
        iEl.classList.replace("fa-solid","fa-regular")
      }
    })
    // EL 밀어넣기
    aEl.append(divEl,pEl,codeEl,disEl,priceEl)
    liEl.append(aEl,iconEl)
    ulEl.append(liEl)
  })
  
}
