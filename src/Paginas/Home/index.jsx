import CssHome from "./home.module.css"
import BotaoCta from "../../Componentes/BotaoCta"

function Home(){
    return(
        <section className={CssHome.sectionContainerHero}>
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

            <section className={CssHome.secao}>
                <div className={CssHome.containerPresencaDigital}>
                    <h2>Presença Digital Não é Luxo, É <br/> Necessidade.</h2>
                    <p>Em um mundo onde a primeira impressão é online, não ter um site é como não ter um número de telefone. Seja para ser encontrado por novos clientes, estabelecer credibilidade ou vender seus serviços 24 horas por dia, um site profissional é a base do seu sucesso no mercado atual.</p>
                </div>

                <div className={CssHome.containerForaDaInternet}>
                    <div className={CssHome.containerTexto}>
                        <h3>Sua Empresa Não <br/> Existe se Não Aparece <br/> na Internet</h3>
                        <p>Nos dias de hoje, 85% dos consumidores pesquisam online antes de fazer uma compra. Se seu negócio não tem uma presença digital profissional, você está perdendo oportunidades todos os dias. Um site não é mais um luxo - é uma necessidade fundamental para qualquer empresa que quer crescer e competir no mercado atual.</p>
                        <BotaoCta
                            child="Comece seu projeto hoje"
                            to=""
                        />
                    </div>
                    <img src="src\assets\personagemComDuvida.png" alt="" />
                </div>
            </section>
        </section>
    )
}

export default Home