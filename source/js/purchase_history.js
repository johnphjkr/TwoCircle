import { userupdate } from "../api/certified/userupdate_api";
import { authCheck } from "../api/certified/authcheck_api";
import { checkAccount } from "../api/account/account_add_check";
import { purchaseHistory } from "../api/products/user/purchase_history_api";
import { purchaseOk } from "../api/products/user/purchase_ok_api";
import { purchaseCancel } from "../api/products/user/purchase_cancel_api";

const listItemContainerEl = document.querySelector(".list_item_container");
const listItemSelectEl = document.querySelector(".list_item_list_select");
const listItemConfirmEl = document.querySelector(".list_item_list_confirm");
const listItemCancelEl = document.querySelector(".list_item_list_cancel");
const itemModalEl = document.querySelector(".container_content_modal");
const dateFilter1MonthEl = document.querySelector(".delivery_filter_month_1");
const dateFilter3MonthEl = document.querySelector(".delivery_filter_month_3");
const dateFilter6MonthEl = document.querySelector(".delivery_filter_month_6");
const dateFilter12MonthEl = document.querySelector(".delivery_filter_month_12");

let product_title = "";
let product_price = 0;
let product_time = "";
let deal_done = false;
let deal_canceled = false;
let list_items = "";
let detailId = "";
let filtered_items = "";
let days = 100000000; // 날짜 필터용 (기본은 무한이므로 큰 숫자로)

window.onload = renderItemList();

function toggleMonthFilter(filter_days) {
    if (this.classList.contains("active")) {
        days = 100000000;
        this.classList.remove("active");
        this.style.cssText = "";
    }
    else {
        days = filter_days;
        this.classList.add("active");
        this.style.cssText = "background-color: #FF597B; border-color: #FF597B; color: #FFFFFF;";
    }
    renderItemList();
}
dateFilter1MonthEl.removeEventListener("click", toggleMonthFilter);
dateFilter1MonthEl.addEventListener("click", function () {
    toggleMonthFilter.call(this, 30);
});

dateFilter3MonthEl.removeEventListener("click", toggleMonthFilter);
dateFilter3MonthEl.addEventListener("click", function () {
    toggleMonthFilter.call(this, 90);
});

dateFilter6MonthEl.removeEventListener("click", toggleMonthFilter);
dateFilter6MonthEl.addEventListener("click", function () {
    toggleMonthFilter.call(this, 180);
});

dateFilter12MonthEl.removeEventListener("click", toggleMonthFilter);
dateFilter12MonthEl.addEventListener("click", function () {
    toggleMonthFilter.call(this, 365);
});

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

function dateFilter(filtered_items, days) {
    const oneDay = 24 * 60 * 60 * 1000;
    const now_date = new Date();
    const filteredItems = filtered_items.filter(filtered_item => {
        const pay_date = new Date(filtered_item.timePaid);
        const timeDiff = Math.abs(now_date.getTime() - pay_date.getTime());
        const dayDiff = Math.ceil(timeDiff / oneDay);
        return dayDiff <= days;
    });
    return filteredItems;
}

function statusFilter() {

}

async function renderItemList() {
    listItemSelectEl.innerHTML = '';
    listItemConfirmEl.innerHTML = '';
    listItemCancelEl.innerHTML = '';
    const res = await purchaseHistory();
    list_items = res;

    filtered_items = dateFilter(list_items, days);

    const liEls = filtered_items.map(function (item) {
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