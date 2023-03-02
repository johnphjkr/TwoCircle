import { userupdate } from "../api/certified/userupdate_api";
import { pwCheckApi } from "../api/certified/pw_check_api";
import { authCheck } from "../api/certified/authcheck_api";



export async function pwChangeHandler() {

    const inputCurrentPwEl = document.querySelector(".current_pw_input");
    const inputNewPwEl = document.querySelector(".new_pw_input");
    const inputNewPwCheckEl = document.querySelector(".new_pw_check_input");
    const pwChangeOkBtnEl = document.querySelector(".pw_change_ok_btn");
    const pwChangeCancelBtnEl = documnet.querySelector("pw_change_cancel_btn");

    let id = "";
    let oldPassword = "";
    let newPassword = "";
    let newPassword_check = "";
    let pw_check = "";
    let pwChangeDone = false;

    inputCurrentPwEl.addEventListener("input", (e) => {
        pw_check = e.target.value;
        console.log(pw_check);
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
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        const res = await authCheck(accessToken);
        id = res.email;
        console.log(id);

        const body = {
            email: id,
            password: pw_check
        }

        const json = await pwCheckApi("POST", body);

        if (json.status === 200) {
            console.log("비밀번호 확인 성공!")
            if (newPassword != newPassword_check) {
                alert("비밀번호 확인이 잘못되었습니다.");
            }
            else {
                await userupdate({ oldPassword, newPassword });
                alert("비밀번호 변경이 완료되었습니다.");
                pwChangeDone = true;
                return pwChangeDone;
            }
        }
        else {
            alert("기존 비밀번호가 틀렸습니다.");
        }
    });
    pwChangeCancelBtnEl.addEventListener("click", async (e) => {
        pwChangeDone = true;
        return pwChangeDone;
    });
    
}