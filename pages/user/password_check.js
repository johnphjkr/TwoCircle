import { pwCheck } from "../../source/js/pw_check";

export function pwCheckRender(url){
  const mypage = document.querySelector("#mypage")
  mypage.innerHTML = /*html*/`
    <div class="pw_check_inner">
        <div class="pw_check_notice_section">
            <h1>비밀번호 확인</h1>
            <h4>회원님의 정보를 안전하게 보호하기 위해</h4>
            <h4>비밀번호를 다시 한번 입력해 주세요.</h4>
        </div>
        <div class="pw_check_section">
          <form>
            <input class="pw_check_section_input" placeholder="비밀번호 입력" type="password">
            <button class="pw_check_section_btn">다음</button>
          </form>
        </div>
    </div>`;
    pwCheck(url)
}
