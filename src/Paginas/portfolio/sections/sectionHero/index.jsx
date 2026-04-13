import CssHero from "./heroProdutos.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"

function HeroProdutos(){
    return (
        <section className={CssHero.secaoHeroProdutos}>
            <h1>Soluções reais desenvolvidas com tecnologia e estratégia</h1>
            <p>Cada projeto foi pensado para resolver problemas de forma prática,<br/> com código limpo, design funcional e foco em resultado.</p>
            <BotaoCta
                child="Comece seu projeto hoje"
            />
        </section>
    )
}

export default HeroProdutos