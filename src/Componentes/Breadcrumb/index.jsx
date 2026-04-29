// breadcrumb.jsx
import CssBreadcrumb from "./breadcrumb.module.css"
import ImgLink from "../imgLink"
import imgVoltar from "../../assets/voltarPagina.svg"
import { useLocation, Link } from "react-router-dom"

// Mapeie aqui o "slug" da URL para o nome legível
const rotaLabels = {
  admin: "Dashboard",
  subDashAdm: "Sub Dashboard",
  // Adicione novas rotas aqui conforme precisar:
  // usuarios: "Usuários",
  // relatorios: "Relatórios",
}

function Breadcrumb() {
  const location = useLocation()

  // Quebra a URL em segmentos, ex: "/admin/subDashAdm" → ["admin", "subDashAdm"]
  const segmentos = location.pathname.split("/").filter(Boolean)

  // Monta os itens com o path acumulado
  const itens = segmentos.map((segmento, index) => {
    const path = "/" + segmentos.slice(0, index + 1).join("/")
    const label = rotaLabels[segmento] || segmento
    const isUltimo = index === segmentos.length - 1

    return { label, path, isUltimo }
  })

  // Define o link de "voltar": segmento anterior ou "/"
  const linkVoltar = segmentos.length > 1
    ? "/" + segmentos.slice(0, -1).join("/")
    : "/"

  return (
    <nav aria-label="breadcrumb" className={CssBreadcrumb.breadcrumbNav}>
      <ImgLink
        srcImg={imgVoltar}
        to={linkVoltar}
      />
      <ol className={CssBreadcrumb.breadcrumb}>

        {itens.map(({ label, path, isUltimo }) => (
          <li
            key={path}
            className={`${CssBreadcrumb.breadcrumbItem} ${isUltimo ? CssBreadcrumb.active : ""}`}
            aria-current={isUltimo ? "page" : undefined}
          >
            {isUltimo ? label : <Link to={path}>{label} /</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb