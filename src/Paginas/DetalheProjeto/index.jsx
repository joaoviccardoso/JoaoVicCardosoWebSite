import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CssDetalhe from "./detalhesDoProjeto.module.css"
import SecaoHeroDetalhes from "./sections/sectionHeroDetalhes";
import SecaoMotivacao from "./sections/sectionMotivacao";
import SecaoFuncionalidade from "./sections/sectionFuncionalidades";

function PaginaDetalheDosProjetos(){
    const { id } = useParams();

    const [produto, setProduto] = useState(null);
    
    useEffect(() => {
        async function buscarDados() {
            try {
                const res = await fetch(`http://localhost:3000/produtos/${id}`);
                const data = await res.json();
                setProduto(data);
            } catch (erro) {
                console.error(erro);
            }
        }
    
        buscarDados();
    }, [id]);

    if (!produto) {
        return <p>Carregando...</p>;
    }

    console.log(produto)
    return (
        <section>
            <SecaoHeroDetalhes
                titulo={produto.titulo}
                descricao={produto.descricao}
                tecnologias={produto.tecnologias}
            />
            <div>

            </div>
        </section>
    )
    
}

export default PaginaDetalheDosProjetos