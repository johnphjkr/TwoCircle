import { headers, url } from "../../requests.js";

export async function purchaseCancel(data) {
    const res = await fetch(url + "/products/cancel", {
        method: "POST",
        headers: {
            ...headers,
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3MTQyODU0LCJleHAiOjE2NzcyMjkyNTQsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.inBksaxKm8DBy8zfCcoRw5rgrJ9BGyMdDQ-sfunPBhs`,
        },
        body: JSON.stringify({
            detailId: data.detailId
        }),
    });
    return await res.json();
}
