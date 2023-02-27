import { headers, url } from "../../requests.js";

export async function purchaseCancel(data) {
    const res = await fetch(url + "/products/cancel", {
        method: "POST",
        headers: {
            ...headers,
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0WnFvSFRhVERBbmlrWkdaQlYyIiwiaWF0IjoxNjc3NDI4Nzc2LCJleHAiOjE2Nzc1MTUxNzYsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.C6lytkg6WkEKGXKOHNGkP18DHFl-dR3C2cHhx5ivh-Y`,
        },
        body: JSON.stringify({
            detailId: data.detailId
        }),
    });
    return await res.json();
}
