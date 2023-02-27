import { login } from "../api/certified/login_api";
import { authCheck } from "../api/certified/authcheck_api";

const inputPwEl = document.querySelector(".pw_check_section_input");
const pwCheckBtnEl = document.querySelector(".pw_check_section_btn");

let id = "user2@gmail.com";
let pw_check = "";
let login_check = false;
let loginResult = "";

inputPwEl.addEventListener("input", (e) => {
    pw_check = e.target.value;
    console.log(pw_check);
});

pwCheckBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await authCheck();
    id = res.email;

    const body = {
        email: id,
        password: pw_check
    }

    const json = await login("POST", body);
    console.log(json.status);
    // try {
    //     loginResult = await login("POST", body, login_check);
    //     console.log(loginResult);
    //     login_check = loginResult.status;
    //     console.log(login_check);
    // }
    // catch (error) {

    // }

    if (json.status === 200) {
        alert("비밀번호 확인 성공!")
    }
    else {
        alert("비밀번호 확인이 잘못되었습니다.")
    }
});