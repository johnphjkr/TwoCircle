import { userupdate } from "../api/certified/userupdate_api";
import { authCheck } from "../api/certified/authcheck_api";

const imgUploadEl = document.querySelector(".upload_img");
const newProfileEl = document.querySelector(".user_info_img");
const picChangeBtnEl = document.querySelector(".user_info_picture_btn");
const pwChangeBtnEl = document.querySelector(".user_info_pw_btn");
const nameChangeBtnEl = document.querySelector(".user_info_name_btn");
const changeModalEl = document.querySelector(".change_modal");
const idEl = document.querySelector(".user_info_id_span");
const nameEl = document.querySelector(".user_info_name_span");

let displayName = "";
let profileImgBase64 = "";

let id = "";
let name = "";
let image = "";

window.onload = async function () {
    const res = await authCheck();
    //const json = await res.json();
    id = res.email;
    console.log(id);
    name = res.displayName;
    console.log(name);
    image = res.profileImg;
    idEl.innerText = id;
    nameEl.innerText = name;
    if (image != null) {
        newProfileEl.src = image;
    }
}

function modalOn() {
    changeModalEl.style.display = "flex";
}

function modalOff() {
    changeModalEl.style.display = "none";
    changeModalEl.innerHTML = "";
}

picChangeBtnEl.addEventListener("click", (e) => {
    imgUploadEl.click();
    imgUploadEl.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', async (e) => {
            const imgURL = e.target.result;
            const newImage = new Image();
            profileImgBase64 = imgURL;

            newImage.addEventListener('load', () => {
                newProfileEl.setAttribute('src', imgURL);
            });

            newImage.setAttribute('src', imgURL);
            await userupdate({ profileImgBase64 });
        });
        reader.readAsDataURL(file);
    });
});

pwChangeBtnEl.addEventListener("click", (e) => {
    //비밀번호 변경 페이지로 이동
    window.location.href = '../../pages/password_change.html';
});

nameChangeBtnEl.addEventListener("click", async (e) => {
    modalOn();
    changeModalEl.innerHTML = /* HTML */`
        <div class="change_modal_box">
            <h1>이름 변경</h1>
            <span>변경하실 이름을 입력하세요.</span>
            <input class="new_name" placeholder="새 이름">
            <div class="new_name_section_btn">
                <button class="change_cancel_btn">취소</button>
                <button class="change_ok_btn">확인</button>
            </div>
        </div>
        `
    const changeCancelBtnEl = document.querySelector(".change_cancel_btn");
    const changeOkBtnEl = document.querySelector(".change_ok_btn");
    const inputNameEl = document.querySelector(".new_name");
    inputNameEl.addEventListener("input", (e) => {
        displayName = e.target.value;
        console.log(displayName);
    });
    changeCancelBtnEl.addEventListener("click", modalOff);

    changeOkBtnEl.addEventListener("click", async (e) => {
        await userupdate({ displayName });
        nameEl.innerText = displayName;
        modalOff();
    });

});