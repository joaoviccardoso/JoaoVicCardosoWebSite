import { useEffect, useState } from "react"
import CardProduto from "../../../../../Componentes/ComponetesCards/CardProdutos"
import CssProduto from "./produtos.module.css"
import LinkParaNavegacao from "../../../../../Componentes/Layouts/Links/link"
import { buildImageUrl } from "../../../../../Utils/buildImagens"
//import menuCelular from "../../../../../assets/menuCelular.svg"

const BASE_URL = import.meta.env.VITE_API_URL

function Produtos(){
    const [produtos, setAllProdutosMP] = useState([]);

    useEffect(() => {
        async function buscarDados() {
            try {
                const res = await fetch(`${BASE_URL}/produtosMP/todos`);
                const data = await res.json();
                setAllProdutosMP(data);
            } catch (erro) {
                console.log(erro);
            }
        }

        buscarDados();
    }, []);

   
    return(
        <section className={CssProduto.secaoProdutos}>
             {/*<div className={CssProduto.filtroProdutos}>
               <span>
                    <LinkParaNavegacao
                        child="Todos"
                    />

                    <LinkParaNavegacao
                        child="UI/UX"
                    />

                    <LinkParaNavegacao
                        child="Projetos"
                    />
                </span>
                <button className="btn d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <img src={menuCelular} alt="menu para celular" />
                </button>
            </div>*/}

            <div className={CssProduto.listaProdutos}>
                {produtos.map(p => (
                        <CardProduto
                            titulo={p.nomeCompleto}
                            descricao={p.descricaoCurta}
                            imgUrl={buildImageUrl(p.imagemPrincipal)}
                            idBtn={p._id}
                        />
                ))}
            </div>
        </section>
    )
}

export default Produtos