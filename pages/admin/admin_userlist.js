import { userListHandler } from "../../source/js/admin/user_list.js";

export async function userListRender() {
  const admin = document.querySelector("#admin");
  admin.innerHTML = /* html */ `
   <div class="container">
    <div class="title">
      <h2>회원 목록</h2>
    </div>
    <div class="admin_userlist">
      <div class="navbar">
        <div class="navbar_number">번호</div>
        <div class="navbar_name">이름</div>
        <div class="navbar_email">이메일</div>
        <div class="navbar_profile">프로필</div>
      </div>
    </div> 
  </div>
  `;
  userListHandler();
}
