const BASE_URL = import.meta.env.VITE_API_URL

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token")

    // ✅ Se o body for FormData, não define Content-Type (browser faz sozinho)
    const isFormData = options.body instanceof FormData

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            ...(!isFormData && { "Content-Type": "application/json" }),
            ...(token && { "Authorization": `Bearer ${token}` }),
            ...options.headers,
        },
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.error || data.message || "Erro na requisição")
    return data
}