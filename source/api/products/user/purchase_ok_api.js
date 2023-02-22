import { headers, url } from "../../requests.js";

export async function purchaseOk(data) {
    const res = await fetch(url + "/products/ok", {
        method: "POST",
        headers: {
            ...headers,
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc2ODgyODQ2LCJleHAiOjE2NzY5NjkyNDYsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.OhLbtBEHEIz8PO42sHvWeP7fx_fJKCf8iXr_uZn8LaA`,
        },
        body: JSON.stringify({
            detailId: data.detailId
        }),
    });
    return await res.json();
}
