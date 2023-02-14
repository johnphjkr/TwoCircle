const inputPwEl = document.querySelector(".pw_check_section_input");
const pwCheckBtnEl = document.querySelector(".pw_check_section_btn");

let pw_check = "";
let real_pw = "";

inputPwEl.addEventListener("input", (e) => {
    pw_check = e.target.value;
    console.log(pw_check);
});

pwCheckBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();
    if (real_pw != pw_check) {
        alert("비밀번호 확인이 잘못되었습니다.")
    }
    else {

    }
});