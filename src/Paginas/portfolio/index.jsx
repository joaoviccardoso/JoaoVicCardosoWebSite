import CssPortfolio from "./portfolio.module.css"
import HeroProdutos from "./sections/sectionHero"
import Produtos from "./sections/sectionProdutos"

function Portfolio(){
    return(
        <main className={CssPortfolio}>
            <HeroProdutos/>
            <div className={CssPortfolio}>
                <Produtos/>
            </div>
        </main>
    )
}

export default Portfolio