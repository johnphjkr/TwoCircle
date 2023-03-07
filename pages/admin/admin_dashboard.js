import { dashBoardHandler } from "../../source/js/admin/admin_dashboard.js";

export function dashBoardRender() {
  const admin = document.querySelector("#admin");
  admin.innerHTML = /* html */ `
  <div class="container">
    <div class="title">
      <h2>보고서</h2>
    </div>
    <div class="admin_dashboard">
      <div>
        <canvas id="myChart" width="700px" height="200px"></canvas>
      </div>
    </div> 
  </div>
  `;
  dashBoardHandler();
}
