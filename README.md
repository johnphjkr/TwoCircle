## 프로젝트 소개
### 사용 기술 스택.
- HTML, Scss, JavaScript
- Bundler: Parcel

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