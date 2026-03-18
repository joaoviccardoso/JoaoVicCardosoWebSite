import CssHome from "./home.module.css"

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
        </section>
    )
}

export default Home