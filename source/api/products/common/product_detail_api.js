import { headers, url } from "requests.js";

export async function productDetail(data) {
  const res = await fetch(url + "/products/:productId", {
    method: "GET",
    headers,
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      price: data.price,
      description: data.description,
      tags: data.tags,
      thumbnail: data.thumbnail,
      photo: data.photo,
      isSoldOut: data.isSoldOut,
      discountRate: data.discountRate,
    }),
  });
  console.log(res);
  return res.json();
}
