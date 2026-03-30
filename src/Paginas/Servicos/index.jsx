import CssServicos from "./servicos.module.css"
import HeroServico from "./sections/sectionHeroServico"
import ParaQuemEh from "./sections/sectionParaQuemEhMeuServico"
import OqueEuFaco from "./sections/sectionOqueEuFaco"
import ComoEuPenso from "./sections/sectionComoEuPenso"

function Servicos(){
    return(
        <section className={CssServicos.paginaServico}>
            <HeroServico/>

            <div>
                <ParaQuemEh/>
                <OqueEuFaco/>
            </div>

            <ComoEuPenso/>
        </section>
    )
}

export default Servicos