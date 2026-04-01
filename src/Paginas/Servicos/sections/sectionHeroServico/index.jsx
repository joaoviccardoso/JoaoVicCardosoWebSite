import img from "../../../../assets/iconePaginaWeb.svg"
import CssHeroServico from "./heroServico.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"

function HeroServico(){
    return(
        <section className={CssHeroServico.secaoHeroServico}>
            <div className={CssHeroServico.containerTexto}>
                <h1>Sites e Sistemas Pensados <br/> para Resultado</h1>
                <p>Crio landing pages estratégicas e sistemas web sob medida para transformar ideias em soluções reais e gerar resultados.</p>
                <div className={CssHeroServico.containerBtnCtaHero}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                    />
                    <BotaoCta
                        child="Ver Meus Projetos"
                    />
                </div>
            </div>

            <img src={img} className={CssHeroServico.img} alt="imagem ilustrativa de uma pagina web" />
        </section>
    )
}

export default HeroServico