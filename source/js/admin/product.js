import { product } from "../../api/products/admin/product.js";
import { productDelete } from "../../api/products/admin/product_delete.js";



export async function adminProductHandler(id){
  const data = await product(id);
  renderProduct(data);
}

function renderProduct(data) {
  console.log(data);
  const wrap = document.querySelector('.product_admin_wrap');
  let tag = false;

  wrap.innerHTML = /* html */ `
    <div class="product_img">
      <img src=${data.thumbnail} alt=${data.description} />
    </div>
    <div class="product_text">
      <p>이름: ${data.title}</p>
      <p>가격: ${data.price}</p>
      <p>설명: ${data.description}</p>
      ${data.tags == '' ? '' :
      '<div class="tag_box">태그: </div>'
    }
      <p>매진: ${data.isSoldOut ? "매진" : "판매중"}</p>
    </div>
    <div class="product_detail">
      <img src=${data.photo} alt="상세설명" />
    </div>
    <div>
      <a href="update/${data.id}">수정하기</a>
      <button type="button" class="delete_btn">삭제하기</button>
    </div>
  `;

  if (Array.isArray(data.tags)) {
    tag = true;
    const tagBox = document.querySelector('.tag_box');
    const tags = data.tags.map((e) => {
      const pEl = document.createElement('p');
      pEl.innerText = e;
      return pEl;
    });
    tagBox.append(...tags);
  } else if (!data.tags === '') {
    tag = false;
    const tagBox = document.querySelector('.tag_box');
    const pEl = document.createElement('p');
    pEl.innerText = data.tags;
    console.log(data.tags);
    tagBox.append(pEl);
  }


  // 삭제하기
  const deleteBtn = document.querySelector('.delete_btn');
  deleteBtn.addEventListener('click', async function () {
    await productDelete(id);
    window.location.href = './product_list.html';
  });
}

