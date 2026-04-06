import CssSobreMim from "./heroSobreMim.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"
import imgPersonagemHero from "../../../../assets/personagemPaginaSobreMim.png"

function SecaoHeroSobreMim(){
    return(
        <section className={CssSobreMim.secaoHeroSobreMim}>
            <div className={CssSobreMim.containerTextoSobreMimHero}>
                <h1>Transformo ideias em produtos digitais.</h1>
                <p>Projetos bem planejados, design estratégico e desenvolvimento focado em performance e crescimento.</p>
                <div>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                    />
                </div>
            </div>

            <img src={imgPersonagemHero} className={CssSobreMim.imgSobreMim} alt="um quadrado com as borda verde com um boneco no centro" />
        </section>
    )
}

export default SecaoHeroSobreMim