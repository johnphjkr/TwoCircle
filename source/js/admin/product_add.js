import { productAdd } from "../../api/products/admin/product_add.js";

const nameEl = document.querySelector('.product_name');
const priceEl = document.querySelector('.product_price');
const textEl = document.querySelector('.product_text');
const tagEl = document.querySelector('.product_tag');
const thumbnailEl = document.querySelector('.product_thumbnail');
const photoEl = document.querySelector('.product_photo');
const discountEl = document.querySelector('.product_discount');
const registrationBtn = document.querySelector('.product_registration');

let name = '';
let price = '';
let text = '';
let tag = '';
let thumbnailImgBase64 = '';
let photoImgBase64 = '';
let discount = '';

nameEl.addEventListener('input', e => {
  name = e.target.value;
});
priceEl.addEventListener('input', e => {
  price = Number(e.target.value);
  if (isNaN(price)) {
    e.target.value = '';
  }
});
textEl.addEventListener('input', e => {
  text = e.target.value;
});
tagEl.addEventListener('input', e => {
  console.log(e.target.value.split(', '));
  tag = e.target.value.split(', ');
});

thumbnailEl.addEventListener('change', event => {
  const file = thumbnailEl.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener('load', e => {
    // console.log(e.target.result); // base64
    thumbnailImgBase64 = e.target.result;
    console.log(thumbnailImgBase64);
    const img = document.querySelector('.img');
    img.innerHTML = /* html */ `
      <img src="${thumbnailImgBase64}" alt="썸네일" />
    `;
  });
});

photoEl.addEventListener('change', event => {
  const file = photoEl.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener('load', e => {
    // console.log(e.target.result);
    photoImgBase64 = e.target.result;
    const img = document.querySelector('.detail_img');
    img.innerHTML = /* html */ `
      <img src="${photoImgBase64}" alt="상세이미지" />
    `;
  });
});

discountEl.addEventListener('input', e => {
  discount = e.target.value;
  if (isNaN(discount)) {
    e.target.value = '';
  }
});

registrationBtn.addEventListener('click', async () => {
  // console.log(name, price, text, tag, thumbnailImgBase64, photoImgBase64, discount);
  await productAdd({
    title: name,
    price: price,
    description: text,
    tags: tag,
    thumbnailBase64: thumbnailImgBase64,
    photoBase64: photoImgBase64,
    discountRate: discount
  });

  window.location.href = './product_list.html';
});
