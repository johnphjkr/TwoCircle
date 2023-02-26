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
const status1FilterEl = document.querySelector(".delivery_filter_status_1");
const status2FilterEl = document.querySelector(".delivery_filter_status_2");
const status3FilterEl = document.querySelector(".delivery_filter_status_3");
const paginationContainer = document.querySelector('.list_item_pagination');

let product_title = "";
let product_price = 0;
let product_time = "";
let deal_done = false;
let deal_canceled = false;
let list_items = "";
let detailId = "";
let filtered_items = "";
let sorted_items = "";
let status = 0;
let days = 100000000; // 날짜 필터용 (기본은 무한이므로 큰 숫자로)
var button_active = {
    button1month: false,
    button3month: false,
    button6month: false,
    button12month: false
}
let currentPage = 1;
let itemsPerPage = 5;

window.onload = function () {
    status1FilterEl.style.cssText = "background-color: #FF597B; border-color: #FF597B; color: #FFFFFF;";
    renderItemList();
}

//구매 상태 필터 이벤트
status1FilterEl.addEventListener("click", (e) => {
    status = 1;
    statusFilter(status);
});
status2FilterEl.addEventListener("click", (e) => {
    status = 2;
    statusFilter(status);
});
status3FilterEl.addEventListener("click", (e) => {
    status = 3;
    statusFilter(status);
});

//날짜 필터 버튼 활성화 및 비활성화
function toggleMonthFilter(filter_days) {

    if (this.classList.contains("active")) {
        days = 100000000;
        this.classList.remove("active");
        this.style.cssText = "";
    }
    else {
        dateFilter1MonthEl.classList.remove("active");
        dateFilter1MonthEl.style.cssText = "";
        dateFilter3MonthEl.classList.remove("active");
        dateFilter3MonthEl.style.cssText = "";
        dateFilter6MonthEl.classList.remove("active");
        dateFilter6MonthEl.style.cssText = "";
        dateFilter12MonthEl.classList.remove("active");
        dateFilter12MonthEl.style.cssText = "";
        days = filter_days;
        this.classList.add("active");
        this.style.cssText = "background-color: #FF597B; border-color: #FF597B; color: #FFFFFF;";
    }
    renderItemList();
}

//날짜 필터 이벤트
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

//한국 시간으로 변경하는 함수
function getdate(date) {
    const new_date = new Date(date);
    var kor_date = new_date.toLocaleString("ko-KR");

    return kor_date;
}

//임시..
// function modalOn() {
//     itemModalEl.style.display = "flex";
// }

// function modalOff() {
//     itemModalEl.style.display = "none";
//     itemModalEl.innerHTML = "";
// }

//날짜 필터
function dateFilter(filtered_items, days) {
    const oneDay = 24 * 60 * 60 * 1000;
    const now_date = new Date();
    const filteredItems = filtered_items.filter(filtered_item => {
        const pay_date = new Date(filtered_item.timePaid);
        const timeDiff = Math.abs(now_date.getTime() - pay_date.getTime());
        const dayDiff = Math.ceil(timeDiff / oneDay);
        return dayDiff <= days;
    });
    filteredItems.sort((a, b) => new Date(b.timePaid) - new Date(a.timePaid));
    return filteredItems;
}

//구매 상태 필터
function statusFilter(status) {
    switch (status) {
        case 1:
            if (listItemSelectEl.style.display === 'none') {
                listItemSelectEl.style.display = "flex";
                listItemSelectEl.style.flexDirection = "column";
            }
            if (listItemConfirmEl.style.display === 'none') {
                listItemConfirmEl.style.display = "flex";
                listItemConfirmEl.style.flexDirection = "column";
            }
            if (listItemCancelEl.style.display === 'none') {
                listItemCancelEl.style.display = "flex";
                listItemCancelEl.style.flexDirection = "column";
            }
            status1FilterEl.style.cssText = "background-color: #FF597B; border-color: #FF597B; color: #FFFFFF;";
            status2FilterEl.style.cssText = "";
            status3FilterEl.style.cssText = "";
            break;
        case 2:
            listItemSelectEl.style.display = "none";
            if (listItemConfirmEl.style.display === 'none') {
                listItemConfirmEl.style.display = "flex";
                listItemConfirmEl.style.flexDirection = "column";
            }
            listItemCancelEl.style.display = "none";
            status1FilterEl.style.cssText = "";
            status2FilterEl.style.cssText = "background-color: #FF597B; border-color: #FF597B; color: #FFFFFF;";
            status3FilterEl.style.cssText = "";
            break;
        case 3:
            listItemSelectEl.style.display = "none";
            listItemConfirmEl.style.display = "none";
            if (listItemCancelEl.style.display === 'none') {
                listItemCancelEl.style.display = "flex";
                listItemCancelEl.style.flexDirection = "column";
            }
            status1FilterEl.style.cssText = "";
            status2FilterEl.style.cssText = "";
            status3FilterEl.style.cssText = "background-color: #FF597B; border-color: #FF597B; color: #FFFFFF;";
            break;
    }
    renderItemList();
}

//시간 정렬
function sortByDate() {

}
//렌더링
async function renderItemList() {
    listItemSelectEl.innerHTML = '';
    listItemConfirmEl.innerHTML = '';
    listItemCancelEl.innerHTML = '';
    listItemContainerEl.appendChild(listItemSelectEl);
    listItemContainerEl.appendChild(listItemConfirmEl);
    listItemContainerEl.appendChild(listItemCancelEl);
    listItemContainerEl.appendChild(paginationContainer);
    const res = await purchaseHistory();
    list_items = res;

    filtered_items = dateFilter(list_items, days);

    const liEls = filtered_items.map(function (item) {
        const listItemEl = document.createElement('li');


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
    switch (status) {
        case 1:
            break;
        case 2:
            listItemContainerEl.removeChild(listItemSelectEl);
            listItemContainerEl.removeChild(listItemCancelEl);
            break;
        case 3:
            listItemContainerEl.removeChild(listItemSelectEl);
            listItemContainerEl.removeChild(listItemConfirmEl);
            break;
    }

    const listItems = listItemContainerEl.querySelectorAll('ul li');
    console.log(listItems);

    updatePagination(listItems.length, itemsPerPage, currentPage);
    displayPage(currentPage, itemsPerPage);

}

//페이지네이션
function updatePagination(numItems, itemsPerPage, currentPage) {
    const numPages = Math.ceil(numItems / itemsPerPage);
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= numPages; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.classList.add('page-link');
        link.dataset.page = i;
        link.textContent = i;

        if (i === currentPage) {
            link.classList.add('active-link');
        }

        paginationContainer.appendChild(link);

        // const activeLink = paginationContainer.querySelector('.active');
        // if (activeLink) {
        //     activeLink.classList.add('active-link');
        // }
    }
}

function displayPage(pageNum, itemsPerPage) {
    const startIndex = (pageNum - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const listItems = document.querySelectorAll('.list_item_container li');
    listItems.forEach((item) => {
        item.style.display = 'none';
    });

    for (let i = startIndex; i < endIndex && i < listItems.length; i++) {
        listItems[i].style.display = 'flex';
    }
}

paginationContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const link = event.target;
    if (link.classList.contains('page-link')) {
        const pageNum = parseInt(link.dataset.page, 10);
        displayPage(pageNum, itemsPerPage);

        paginationContainer.querySelectorAll('.page-link').forEach((link) => {
            link.classList.remove('active-link');
        });
        link.classList.add('active-link');
    }
});