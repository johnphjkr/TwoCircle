import { accountHandler } from "../../source/js/account";

export function accountRender(){
  const mypage = document.querySelector("#mypage")
  mypage.innerHTML = /*html*/`
  <section class="account">
    <div class="dimmed_layer _hidden"></div>
    <div class="pop_up _hidden">
      <div class="pop_up_wrap">
        <button class="close_btn">x</button>
        <div class="title">계좌 추가하기</div>
        <div class="bank_code_wrap">
          <div class="bank_code">은행코드</div>
          <select class="bank_code_select"></select>
        </div>
        <div class="bank_account_wrap">
          <div class="bank_account">계좌번호</div>
          <input type="text" class="bank_account_input" />
          <div class="validate_account_wrap"></div>
        </div>
        <div class="phone_number_wrap">
          <div class="phone_number">전화번호</div>
          <input type="text" class="phone_number_input" />
          <div class="validate_text"></div>
        </div>
        <div class="signature_wrap">
          <div class="signature">예금주</div>
          <input type="text" class="signature_input" />
        </div>

        <div class="add_btn_wrap">
          <button class="add_btn">계좌 추가하기</button>
        </div>
      </div>
    </div>

    <div class="inner account_inner">
      <div class="account_wrap">
        <div class="account_header">
          <h2 class="header">계좌 관리</h2>
        </div>

        <div class="account_info_wrap"></div>

        <div class="btn_wrap">
          <div class="account_change_btn_wrap">
            <button class="account_change_btn">계좌 변경하기</button>
          </div>
          <div class="account_add_btn_wrap">
            <button class="account_add_btn">계좌 추가하기</button>
          </div>
        </div>
      </div>
    </div>
  </section>`
  accountHandler()
}
