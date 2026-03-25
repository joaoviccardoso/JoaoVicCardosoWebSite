import CssHero from "./hero.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"
import balaoMensagemHola from "../../../../assets/balaoOlaHome.png"
import imagemBonecoJoaoHome from "../../../../assets/imagemBonecoJoaoHome.png"

function Hero(){
    return(
        <section className={CssHero.sectionHero}>
                <div className={CssHero.containerImagemHero}>
                    <span>
                        <img src={balaoMensagemHola} alt="Caixa de mensagem Olá! Seja bem-vindo ao meu site."/>
                        <p>Olá! Seja bem-vindo ao meu site.</p>
                    </span>

                    <img src={imagemBonecoJoaoHome} alt="Personagem Animado do João com um labtop" />
                </div>

                <div className={CssHero.containerTextoHero}>
                    <h1>Eu ajudo negócios a crescer <br/>na internet</h1>
                    <p>Desenvolvo sites que conectam sua empresa a mais clientes, de <br/> forma simples e profissional.</p>
                </div>

                <div className={CssHero.containerBotaoCta}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to=""
                    />
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to=""
                    />
                </div>
        </section>
    )
}

export default Hero