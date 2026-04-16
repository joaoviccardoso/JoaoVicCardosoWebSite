import CssFuncio from "./funcionalidades.module.css"
import CardProduto from "../../../../Componentes/CardProdutos"
import CardFuncionalidade from "../../../../Componentes/CardFuncionalidade"

function SecaoFuncionalidade({funcionalidade, imagens}){
    return(
        <section className={CssFuncio.secaoFuncionalidade}>
            <h3>Funcionalidades Principais</h3>
            <p>Explore as funcionalidades desenvolvidas para tornar a experiência mais fluida e eficiente. Cada detalhe foi pensado para facilitar o uso e entregar valor de forma simples e intuitiva.</p>

            <ul className={CssFuncio.ulFuncionalidade}>
                {funcionalidade?.map((texto, index) => (
                    <li key={index}>
                        <CardFuncionalidade
                            titulo={`Funcionalidade ${index + 1}`}
                            descricao={texto}
                            imgUrl={imagens[index]}
                        />
                    </li>
                ))}
            </ul>
            
            
        </section>
    )
}

export default SecaoFuncionalidade