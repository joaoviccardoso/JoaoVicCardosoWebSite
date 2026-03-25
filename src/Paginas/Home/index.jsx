import CssHome from "./home.module.css"
import Hero from "./sections/sectionHero" 
import PresencaDigital from "./sections/sectionPresencaDigital"
import ForaDaInternet from "./sections/sectionForaDaInternet"
import ComoTranformoIdeia from "./sections/sectionComoTransformoIdeia"
import AlemDeCodigo from "./sections/sectionEntregoAlemDeCodigo"
import GerarValor from "./sections/sectionGerarValor"
import ProntoParaComecar from "./sections/sectionProntoParaComecar"

function Home(){
    return(
        <section className={CssHome.sectionContainerHero}>
            <Hero/>

            <div className={CssHome.secao0}>
                <div className={CssHome.secao1}>
                    <PresencaDigital/>
                    <ForaDaInternet></ForaDaInternet>
                    <ComoTranformoIdeia/>
                    <AlemDeCodigo/>
                </div>

                <div className={CssHome.secao2}>
                    <GerarValor/>
                </div>
            </div>
            
            <ProntoParaComecar/>
        </section>
    )
}

export default Home