import CssHome from "./home.module.css"
import Hero from "./sections/sectionHero" 
import PresencaDigital from "./sections/sectionPresencaDigital"
import ForaDaInternet from "./sections/sectionForaDaInternet"
import ComoTranformoIdeia from "./sections/sectionComoTransformoIdeia"
import AlemDeCodigo from "./sections/sectionEntregoAlemDeCodigo"

function Home(){
    return(
        <section className={CssHome.sectionContainerHero}>
            <Hero/>

            <section className={CssHome.secao}>
                <PresencaDigital/>
                <ForaDaInternet></ForaDaInternet>
                <ComoTranformoIdeia/>
                <AlemDeCodigo/>
            </section>
        </section>
    )
}

export default Home