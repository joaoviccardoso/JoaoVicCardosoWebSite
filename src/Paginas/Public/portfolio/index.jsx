import CssPortfolio from "./portfolio.module.css"
import HeroProdutos from "./sections/sectionHero"
import Produtos from "./sections/sectionProdutos"

function Portfolio(){
    return(
        <main className={CssPortfolio.paginaProdutos}>
            <HeroProdutos/>
            <div className={CssPortfolio.secaoVerde}>
                <Produtos/>
            </div>
        </main>
    )
}

export default Portfolio