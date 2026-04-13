import { useEffect, useState } from "react"
import CssProduto from "./produtos.module.css"
import LinkParaNavegacao from "../../../../Componentes/Links/link"
import menuCelular from "../../../../assets/menuCelular.svg"

function Produtos(){
    const [produto, setProduto] = useState([]);

   useEffect(() => {
    async function buscarDados() {
        try {
        const res = await fetch("http://localhost:3000/produtos");
        const data = await res.json();
        setProduto(data);
        } catch (erro) {
        console.error(erro);
        }
    }

    buscarDados();
    }, []);

    console.log(produto)
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

            <ul>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
            </ul>
        </section>
    )
}

export default Produtos