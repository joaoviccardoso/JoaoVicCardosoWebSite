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

export async function postProdutosPC(dados){
    return apiFetch("/produtos/criar", {
        method: "POST",
        body: JSON.stringify(dados),
    })
}

// Busca um produto pelo id
export async function getProdutoPorId(id) {
    return apiFetch(`/produtos/produtoPorId/${id}`, { 
        method: "GET" 
    })
}

// Atualiza um produto pelo id
export async function putProdutoPC(id, dados) {
    return apiFetch(`/produtos/${id}`, {
        method: "PUT",
        body: JSON.stringify(dados),
    })
}