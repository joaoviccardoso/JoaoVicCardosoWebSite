import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CssDetalhe from "./detalhesDoProjeto.module.css"
import SecaoHeroDetalhes from "./sections/sectionHeroDetalhes";
import SecaoMotivacao from "./sections/sectionMotivacao";
import SecaoFuncionalidade from "./sections/sectionFuncionalidades";
import { buildImageUrl } from "../../../Utils/buildImagens";

const BASE_URL = import.meta.env.VITE_API_URL;

function PaginaDetalheDosProjetos(){
    const [produtoMP, setProdutoMP] = useState({})
    const { id } = useParams();

    useEffect(() => {
        async function buscarDados() {
            try {
                const res = await fetch(`${BASE_URL}/produtosMP/produtoMpPorId/${id}`);
                const data = await res.json();
                setProdutoMP(data);
            } catch (erro) {
                console.error(erro);
            }
        }
    
        buscarDados();
    }, [id]);

    return (
        <section className={CssDetalhe}>
            <SecaoHeroDetalhes
                titulo={produtoMP.nomeCompleto}
                descricao={produtoMP.descricaoCurta}
                imgProjeto={buildImageUrl(produtoMP.imagemPrincipal)}
                linkProjetoOnline={produtoMP.linkProjetoOnline}
                linkProjetoGitHub={produtoMP.linkProjetoGitHub}
            />
            <div className={CssDetalhe.divVerdeMotivacao}>
                <SecaoMotivacao
                    textoMotivacao={produtoMP.motivoDoProjeto}
                />
            </div>
            <SecaoFuncionalidade
                funcionalidades={produtoMP.funcionalidades}
                tecnologias={produtoMP.tecnologias}
            />
        </section>
    )
    
}

export default PaginaDetalheDosProjetos