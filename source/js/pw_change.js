import { userupdate } from "../api/certified/userupdate_api";

const inputCurrentPwEl = document.querySelector(".current_pw_input");
const inputNewPwEl = document.querySelector(".new_pw_input");
const inputNewPwCheckEl = document.querySelector(".new_pw_check_input");
const pwChangeOkBtnEl = document.querySelector(".pw_change_ok_btn");

/*추후에 사용할수도
const pwChangeSuccessEl = document.querySelector(".pw_change_success");

function modalOn() {
    pwChangeSuccessEl.style.display = "flex";
}

function modalOff() {
    pwChangeSuccessEl.style.display = "none";
    pwChangeSuccessEl.innerHTML = "";
}
*/

let oldPassword = "";
let newPassword = "";
let newPassword_check = "";

inputCurrentPwEl.addEventListener("input", (e) => {
    oldPassword = e.target.value;
    console.log(oldPassword);
});

inputNewPwEl.addEventListener("input", (e) => {
    newPassword = e.target.value;
    console.log(newPassword);
});

inputNewPwCheckEl.addEventListener("input", (e) => {
    newPassword_check = e.target.value;
    console.log(newPassword_check);
});

pwChangeOkBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();
    if (newPassword != newPassword_check) {
        alert("비밀번호 확인이 잘못되었습니다.")
    }
    else {
        await userupdate({ oldPassword, newPassword });
        alert("비밀번호 변경이 완료되었습니다.")
    }
});