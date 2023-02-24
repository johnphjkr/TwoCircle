import { headers, url } from "../../requests.js";

export async function purchaseCancel(data) {
    const res = await fetch(url + "/products/cancel", {
        method: "POST",
        headers: {
            ...headers,
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3MjcxNjY0LCJleHAiOjE2NzczNTgwNjQsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.XCP-ZvCOXAmBXQY_DktEdiO3bjSIj8e9vgkHC047ftM`,
        },
        body: JSON.stringify({
            detailId: data.detailId
        }),
    });
    return await res.json();
}
