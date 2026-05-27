import { apiFetch } from "./api"
import { jwtDecode } from "jwt-decode"

export function getIdDoToken() {
    const token = localStorage.getItem("token")
    if (!token) return null
    const { id } = jwtDecode(token)
    return id
}

export async function postProdutosMP(formData) {  // recebe FormData direto
    return apiFetch("/produtosMP/criar", {
        method: "POST",
        body: formData,  // ✅ sem JSON.stringify
    })
}

export async function getAllProdutosMP() {
    return apiFetch("/produtosMP/todos", {
        method: "GET",
    })
}