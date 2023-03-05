import { adminProductHandler } from "../../source/js/admin/product";

export function adminProduct(id) {
  const admin = document.querySelector("#admin");
  admin.innerHTML = /*html*/`
  <div class="container">
    <div class="product_admin_wrap">
      <div class="title">
      </div>
      <div class="admin_wrap"></div>
    </div>
  </div>
  `;
  adminProductHandler(id);
}

