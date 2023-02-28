import { headers, url } from "../../requests.js";

export async function purchaseCancel(data) {
    const res = await fetch(url + "/products/cancel", {
        method: "POST",
        headers: {
            ...headers,
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3NTkxODcxLCJleHAiOjE2Nzc2NzgyNzEsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.NL9cARl0Qmii2h8mIY030VyX6IpL4cGzkYWsQHhWU3A`,
        },
        body: JSON.stringify({
            detailId: data.detailId
        }),
    });
    return await res.json();
}
