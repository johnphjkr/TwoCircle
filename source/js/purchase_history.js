import { userupdate } from "../api/certified/userupdate_api";
import { authCheck } from "../api/certified/authcheck_api";
import { checkAccount } from "../api/account/account_add_check";
import { purchaseHistory } from "../api/products/user/purchase_history_api";
import { purchaseOk } from "../api/products/user/purchase_ok_api";
import { purchaseCancel } from "../api/products/user/purchase_cancel_api";

const listItemSelectEl = document.querySelector(".list_item_list_select");
const listItemConfirmEl = document.querySelector(".list_item_list_confirm");
const listItemCancelEl = document.querySelector(".list_item_list_cancel");
const itemModalEl = document.querySelector(".container_content_modal");

let product_title = "";
let product_price = 0;
let product_time = "";
let deal_done = false;
let deal_canceled = false;
let list_items = "";
let detailId = "";


window.onload = async function renderItemList() {
    const res = await purchaseHistory();
    list_items = res;

    const liEls = list_items.map(function (item) {
        const listItemEl = document.createElement('div');


        listItemEl.classList.add("list_item");
        listItemEl.setAttribute('data-status', 'select');

        //상품이미지
        const imgEl = document.createElement('div');
        imgEl.classList.add("list_item_productInfo");
        var product_img = document.createElement('img');
        product_img.src = item.product.thumbnail;
        imgEl.append(product_img);

        //상품명
        const titleEl = document.createElement('div');
        titleEl.classList.add("list_item_orderNumber");

        //상품가격
        const priceEl = document.createElement('div');
        priceEl.classList.add("list_item_payAmount");

        //주문시간
        const timeEl = document.createElement('div');
        timeEl.classList.add("list_item_orderDate");

        //버튼
        const btnEl = document.createElement('div');
        btnEl.classList.add("list_item_btn");

        detailId = item.detailId;
        deal_canceled = item.isCanceled;
        deal_done = item.done;



        titleEl.textContent = item.product.title;
        priceEl.textContent = item.product.price;
        timeEl.textContent = getdate(item.timePaid);

        listItemEl.append(imgEl, titleEl, priceEl, timeEl, btnEl);

        if (deal_canceled == true && deal_done == false) {
            btnEl.textContent = "구매 취소";
            listItemCancelEl.appendChild(listItemEl);
        }
        if (deal_done == true && deal_canceled == false) {
            btnEl.textContent = "구매 확정";
            listItemConfirmEl.appendChild(listItemEl);
        }
        if (deal_done == false && deal_canceled == false) {
            console.log(detailId);
            const btnOkEl = document.createElement('div');
            btnOkEl.classList.add("btn_ok");
            btnOkEl.textContent = "확정";
            const btnCancelEl = document.createElement('div');
            btnCancelEl.classList.add("btn_cancel");
            btnCancelEl.textContent = "취소";

            btnOkEl.addEventListener("click", (e) => {
                //구매 확정
                alert("구매가 확정되었습니다!");
                deal_done = true;
                detailId = item.detailId;
                console.log({ detailId });
                purchaseOk({ detailId });
                btnOkEl.style.display = "none";
                btnCancelEl.style.display = "none";
                btnEl.textContent = "구매 확정";
                //listItemEl.setAttribute('data-status', 'confirm');
            });

            btnCancelEl.addEventListener("click", (e) => {
                //구매 취소
                alert("구매가 취소되었습니다.");
                deal_canceled = true;
                detailId = item.detailId;
                console.log(item.isCanceled);
                purchaseCancel({ detailId });
                console.log(item.isCanceled);
                btnOkEl.style.display = "none";
                btnCancelEl.style.display = "none";
                btnEl.textContent = "구매 취소";
                //listItemEl.setAttribute('data-status', 'cancel');
                //listItemEl.style.display = "none";
            });

            btnEl.append(btnOkEl, btnCancelEl);

            listItemSelectEl.appendChild(listItemEl);
        }

        return listItemEl;
    })

}

function getdate(date) {
    const new_date = new Date(date);
    var kor_date = new_date.toLocaleString("ko-KR");

    return kor_date;
}

function modalOn() {
    itemModalEl.style.display = "flex";
}

function modalOff() {
    itemModalEl.style.display = "none";
    itemModalEl.innerHTML = "";
}