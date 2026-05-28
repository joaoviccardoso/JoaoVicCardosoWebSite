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

// Atualiza um produto pelo id
export async function putProdutoMp(id, formData) {
    return apiFetch(`/produtosMP/atualizar/${id}`, {
        method: "PUT",
        body: formData,
    })
}

export async function getAllProdutosMP() {
    return apiFetch("/produtosMP/todos", {
        method: "GET",
    })
}

// Busca um produto pelo id
export async function getProdutoMpPorId(id) {
    return apiFetch(`/produtosMP/produtoMpPorId/${id}`, { 
        method: "GET" 
    })
}

// deleta um produto pelo id
export async function deleteProdutoMpPorId(id) {
    return apiFetch(`/produtosMP/deletar/${id}`, { 
        method: "DELETE" 
    })
}