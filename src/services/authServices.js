import { apiFetch } from "./api"
import { jwtDecode } from "jwt-decode"

export function getIdDoToken() {
    const token = localStorage.getItem("token")
    if (!token) return null
    const { id } = jwtDecode(token)
    return id
}

export async function atualizarUsuario(dados, idExterno = null) {
    const id = idExterno || getIdDoToken()
    return apiFetch(`/auth/atualizarDados/${id}`, {
        method: "PUT",
        body: JSON.stringify(dados),
    })
}