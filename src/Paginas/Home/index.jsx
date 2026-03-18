import CssHome from "./home.module.css"
import BotaoCta from "../../Componentes/BotaoCta"

function Home(){
    return(
        <section className={CssHome.sectionHero}>
            <div className={CssHome.containerImagemHero}>
                <span>
                    <img src="src/assets/balaoOlaHome.png" alt="Caixa de mensagem Olá! Seja bem-vindo ao meu site." />
                    <p>Olá! Seja bem-vindo ao meu site.</p>
                </span>

                <img src="src\assets\imagemBonecoJoaoHome.png" alt="Personagem Animado do João com um labtop" />
            </div>

            <div className={CssHome.containerTextoHero}>
                <h1>Eu ajudo negócios a crescer <br/>na internet</h1>
                <p>Desenvolvo sites que conectam sua empresa a mais clientes, de <br/> forma simples e profissional.</p>
            </div>

            <div className={CssHome.containerBotaoCta}>
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

export default Home