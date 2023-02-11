const headers = {
    'Content-Type': 'application/json',
    'apikey': 'FcKdtJs202301',
    'username': 'KDT4_Team5'
}

export async function signup() {
    try {
        const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup', {
            method: 'POST',
            headers
        })
        const json = await res.json()
        return json
    } catch (error) {
        // 강제로 에러 발생!
        throw error
    }
}