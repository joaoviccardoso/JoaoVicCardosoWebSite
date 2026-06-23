import CssHome from "./home.module.css"
import Hero from "./sections/sectionHero" 
import CardVerde from "../../../Componentes/ComponetesCards/CardVerde"
import CardBlackGrande from "../../../Componentes/ComponetesCards/CardBlackGrande"
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
                    <CardVerde
                        tag={"Seja encontrado na internet"}
                        titulo={"Presença Digital Não é Luxo É Necessidade."}
                        texto={"Em um mundo onde a primeira impressão é online, não ter um site é como não ter um número de telefone."}
                    />
                    <CardBlackGrande
                        tag={"Comportamento do consumidor"}
                        titulo={"85% dos consumidores pesquisam online antes de comprar."}
                        texto={"Se seu negócio não tem presença digital, você está perdendo oportunidades todos os dias."}
                    />
                    
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