import { apiFetch } from "./api"
import { jwtDecode } from "jwt-decode"

export function getToken() {
    return localStorage.getItem("token")
}

export function getIdDoToken() {
    const token = localStorage.getItem("token")
    if (!token) return null
    const { id } = jwtDecode(token)
    return id
}

// Retorna o role/tipo do usuário decodificado do token
export function getRoleDoToken() {
    const token = getToken()
    if (!token) return null
    try {
        const decoded = jwtDecode(token)
        return decoded.role ?? decoded.tipo ?? null  // ajuste o campo conforme seu JWT
    } catch {
        return null
    }
}

// Verifica se o token existe e ainda não expirou
export function estaLogado() {
    const token = getToken()
    if (!token) return false
    try {
        const { exp } = jwtDecode(token)
        if (!exp) return true
        return Date.now() < exp * 1000   // exp é em segundos
    } catch {
        return false
    }
}

// Remove o token — logout
export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}

// Redireciona para o dashboard correto com base no role
export function getDashboardPorRole(role) {
    switch (role) {
        case "adm":
        case "admin":
            return "/dashboard/admin"
        case "user":
        default:
            return "/dashboard"
    }
}

//Pega todos os usuarios
export async function getAllUsuarios() {
    return apiFetch("/auth/users", {
        method: "GET",
    })
}

//pego usuario pelo id
export async function getUsuarioPorId(id) {
    return apiFetch(`/auth/user/${id}`, {
        method: "GET",
    })
}

//Pega usuario pelo nome digitado
export async function getUserPorNome(nome){
    return apiFetch(`/auth/buscar?nome=${nome}`, {
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

//deleta usuario pelo id
export async function deleteUsuarioPorId(id) {
    return apiFetch(`/auth/delete/${id}`, {
        method: "DELETE",
    })
}