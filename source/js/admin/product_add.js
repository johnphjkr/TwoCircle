import { productAdd } from "../../api/products/admin/product_add.js";
import { router } from "../../route.js";

export function productAddItem() {
  const nameEl = document.querySelector('.product_name');
  const priceEl = document.querySelector('.product_price');
  const textEl = document.querySelector('.product_text');
  const tagEl = document.querySelector('.product_tag');
  const thumbnailBtn = document.querySelector('.thumbnail_btn');
  const thumbnailEl = document.querySelector('.product_thumbnail');
  const photoBtn = document.querySelector('.photo_btn');
  const photoEl = document.querySelector('.product_photo');
  const discountEl = document.querySelector('.product_discount');
  const registrationBtn = document.querySelector('.product_registration');
  const dot = document.querySelector(".dot-wrap");

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
    tag = e.target.value.split(', ');
  });

  // 제품 사진
  thumbnailBtn.addEventListener('click', () => {
    thumbnailEl.click();
  });
  thumbnailEl.addEventListener('change', event => {
    const file = thumbnailEl.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
      thumbnailImgBase64 = e.target.result;
      const img = document.querySelector('.thumbnail_img');
      img.innerHTML = /* html */ `
        <img src="${thumbnailImgBase64}" alt="썸네일" />
      `;
    });
  });

  // 제품 상세 사진
  photoBtn.addEventListener('click', () => {
    photoEl.click();
  });
  photoEl.addEventListener('change', event => {
    const file = photoEl.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
      photoImgBase64 = e.target.result;
      const img = document.querySelector('.photo_img');
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
    await productAdd({
      title: name,
      price: price,
      description: text,
      tags: tag,
      thumbnailBase64: thumbnailImgBase64,
      photoBase64: photoImgBase64,
      discountRate: discount
    });

    router.navigate("admin")
  });
  dot.style.display = "none";

}

