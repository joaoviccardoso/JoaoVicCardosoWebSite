import { useEffect, useState } from "react"
import CardProduto from "../../../../Componentes/CardProdutos"
import CssProduto from "./produtos.module.css"
import LinkParaNavegacao from "../../../../Componentes/Links/link"
import menuCelular from "../../../../assets/menuCelular.svg"

function Produtos(){
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function buscarDados() {
            try {
                const res = await fetch("http://localhost:3001/produtos");
                const data = await res.json();
                setProduto(data);
            } catch (erro) {
                console.log(erro);
            }
        }

        buscarDados();
    }, []);

   
    return(
        <section className={CssProduto.secaoProdutos}>
            <div className={CssProduto.filtroProdutos}>
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
            </div>

            <ul className={CssProduto.listaProdutos}>
                {produto.map(p => (
                    
                    <li key={p.id}>
                        <CardProduto
                            titulo={p.titulo}
                            descricao={p.descricao}
                            imgUrl={p.imagens[0]}
                            idBtn={p.id}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Produtos