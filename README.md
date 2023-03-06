## 배포 사이트

[![Netlify Status](https://api.netlify.com/api/v1/badges/df0e144a-736d-44d7-be21-12d6c1573797/deploy-status)](https://app.netlify.com/sites/magical-babka-4591f3/deploys)

**TwoCircle(투써클 안경점)** : https://magical-babka-4591f3.netlify.app/
[상품은 내일 추가 예정..]

## 작업기간
23.01.30(월) ~ 미정

## 테스트 아이디
### 테스트
ID : test@naver.com
PW : abcd1234
### 관리자
ID : admin@naver.com
PW : abcd1234

## 사이트 설명 (추가 예정...)

## 프로젝트 멤버 및 작업 목록

| 박희수<조장> | 김선미 | 송지윤  | 장현준 | 박현준 |
|:--:|:--:|:--:|:--:|:--:|
| <img src="https://avatars.githubusercontent.com/u/110139098?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/100131415?v=4" width=100> | <img src="https://avatars.githubusercontent.com/u/71622691?v=4" width=100> | <img src="https://avatars.githubusercontent.com/u/83224463?v=4" width=100> | <img src="https://avatars.githubusercontent.com/u/69203535?v=4" width=100> |
| [박희수](https://github.com/Nevacat) | [김선미](https://github.com/janghwahyun/)  |   [송지윤](https://github.com/jiyoon29)                     | [장현준](https://github.com/hyeon17)   | [박현준](https://github.com/johnphjkr)  |
| </br>라우터 연결 <br/> 로그인 및 회원가입 페이지 <br/> 검색 및 태그에 따른 상품페이지  |  장바구니 페이지  </br> 위시리스트</br> 마이페이지 </br> 계좌괸리 페이지  | 메인페이지 <br/> 관리자 페이지 <br/> 전반적인 디자인 관리  |  제품 상세페이지 <br/> 결제 및 결제 완료 페이지</br> 구매목록 페이지 디자인 </br> 유저 목록 관리 페이지   | 정보 변경 페이지 <br> 구매목록 페이지 |

### 프로젝트의 기능구현 사항

📌 필수사항

- [x] 제공된 API를 사용하여 해당하는 쇼핑몰을 구성하기.
- [x] 회원가입 페이지를 제작하여 회원가입 기능 구현하기.
- [x] 로그인 페이지를 제작하여 로그인 기능 구현하기.
- [x] 상품 리스트 페이지를 제작하여 상품 리스트 및 상세 페이지를 구현하여 상품 구매 기능 구현하기.
- [x] 장바구니 페이지를 제작하여 장바구니 기능 구현하기.
- [x] 주문 페이지를 제작하여 주문 기능 구현하기.
- [x] 마이페이지를 제작하여 마이페이지 기능 구현하기.
- [x] 검색 페이지를 제작하여 검색 및 필터를 통해 검색을 구현하기.

### 프로젝트 기술 스택

- Basic: `HTML` `SCSS` `JAVASCRIPT`
- Library: `node-fetch` `Parcel` `Swiper` `Navigo` `Netlify`
- Deploy: `Netlify`
- Bundler: `Parcel 1`


### 프로젝트 구조
```
TwoCircle
├─ image
├─ index.html
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ account.html
│  ├─ cart.html
│  ├─ login.html
│  ├─ mypage.html
│  ├─ order_completed.html
│  ├─ password_change.html
│  ├─ password_check.html
│  ├─ payment.html
│  ├─ product_details.html
│  ├─ product_list.html
│  ├─ purchase_history.html
│  ├─ signup.html
│  ├─ user_information.html
│  └─ wish_list.html
├─ README.md
├─ scss
│  ├─ abstracts
│  └─ base
└─ source
   ├─ api
   │  ├─ account
   │  │  └─ account_add.js
   │  ├─ certified
   │  │  ├─ authcheck_api.js
   │  │  ├─ login_api.js
   │  │  ├─ signup_api.js
   │  │  └─ userupdate_api.js
   │  ├─ products
   │  │  ├─ admin
   │  │  │  ├─ allProduct_api.js
   │  │  │  └─ product_add.js
   │  │  ├─ common
   │  │  │  └─ product_detail_api.js
   │  │  └─ user
   │  │     ├─ payment_api.js
   │  │     └─ purchase_history_api.js
   │  ├─ requests.js
   │  ├─ userAPI.js
   │  └─ util.js
   ├─ js
   │  ├─ login.js
   │  ├─ payment.js
   │  ├─ product_details.js
   │  ├─ purchase_history.js
   │  └─ signup.js
   └─ main.js

```

