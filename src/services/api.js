const BASE_URL = "https://lightslategray-deer-405894.hostingersite.com/"

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token")

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
            ...options.headers,
        },
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.error || data.message || "Erro na requisição")

    return data
}