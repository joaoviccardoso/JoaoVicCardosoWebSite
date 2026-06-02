const API_URL = import.meta.env.VITE_API_URL;

/**
 * Monta a URL completa de um arquivo servido pelo backend (ex: /uploads/foto.jpg)
 * Funciona tanto em desenvolvimento (localhost:3000) quanto em produção.
 *
 * @param {string} caminho - Caminho retornado pelo banco, ex: "/uploads/foto.jpg"
 * @returns {string} URL completa, ex: "http://localhost:3000/uploads/foto.jpg"
 */
export function buildImageUrl(caminho) {
  if (!caminho) return "";
  // Remove barra inicial do caminho para evitar barra dupla na concatenação
  return `${API_URL}/${caminho.replace(/^\//, "")}`;
}