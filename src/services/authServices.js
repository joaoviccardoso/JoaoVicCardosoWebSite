import { apiFetch } from "./api"
import { jwtDecode } from "jwt-decode"

export function getIdDoToken() {
    const token = localStorage.getItem("token")
    if (!token) return null
    const { id } = jwtDecode(token)
    return id
}

//Pega todos os usuarios
export async function getAllUsuarios() {
    return apiFetch("/auth/users", {
        method: "GET",
    })
}

export async function atualizarUsuario(dados, idExterno = null) {
    const id = idExterno || getIdDoToken()
    return apiFetch(`/auth/atualizarDados/${id}`, {
        method: "PUT",
        body: JSON.stringify(dados),
    })
}