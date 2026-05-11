import { apiFetch } from "./api"
import { jwtDecode } from "jwt-decode"

export function getIdDoToken() {
    const token = localStorage.getItem("token")
    if (!token) return null
    const { id } = jwtDecode(token)
    return id
}

export async function getAllProdutosPC(){
    return apiFetch("/produtos/todos", {
        method: "GET",
    })
}