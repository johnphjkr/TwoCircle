import { productList } from "../../api/products/admin/product_list.js";

const listEl = document.querySelector('.product_admin_ul');

(async () => {
  const data = await productList();
  renderList(data);
})();


function renderList(data) {
  console.log(data);
  const liEls = data.map(prd => {
    const liEl = document.createElement('li');
    liEl.innerHTML = /* html */ `
      <a href="./product.html?${prd.id}">
        <div class="product_img">
          <img src="${prd.thumbnail}" alt="썸네일" />
        </div>
        <p>${prd.title}</p>
      </a>
      `;

    return liEl;
  });
  listEl.append(...liEls);
}