import { productList } from "../../api/products/admin/product_list.js";
import { productDelete } from "../../api/products/admin/product_delete.js";

const listEl = document.querySelector('.product_admin_ul');
const labelEl = document.querySelector('label');
const deleteBtn = document.querySelector('.select_delete');

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
        <input type="checkbox" name="check" data-id=${prd.id} />
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


// 전체체크
labelEl.addEventListener('change', function () {
  const allCheck = labelEl.querySelector('input');
  const checkboxs = document.getElementsByName('check');
  checkboxs.forEach((checkbox) => {
    checkbox.checked = allCheck.checked;
  });
});

deleteBtn.addEventListener('click', function () {
});