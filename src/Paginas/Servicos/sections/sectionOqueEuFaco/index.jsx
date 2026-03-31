import CssOqueEuFaco from "./oqueEuFaco.module.css"
import ContainerComBotao from "../../../../Componentes/ContainerTextoComBotao"
import logoEscuro from "../../../../assets/logoDaPaginaPreto.png"

function OqueEuFaco() {
    return(
        <section className={CssOqueEuFaco.sectionOqueEuFaco}>
            <div className={CssOqueEuFaco.containerTexto}>
                <h3>O Que Eu Faço</h3>
                <p>Desenvolvo páginas na internet pensadas para chamar atenção, explicar seu serviço de forma clara e aumentar suas chances de fechar vendas.</p>
            </div>

            <div className={CssOqueEuFaco.divInfoOqueEuFaco}>
                <div className={CssOqueEuFaco.divConteinerComOsTexto}>
                    <ContainerComBotao
                        titulo="1.Landing Pages"
                        texto="Criação de páginas modernas e responsivas focadas em conversão e apresentação de produtos ou serviços."
                    />

                    <ContainerComBotao
                        titulo="2. Blogs"
                        texto="Desenvolvimento de blogs organizados, com leitura agradável e estrutura pensada para conteúdo e SEO."
                    />

                    <ContainerComBotao
                        titulo="3.Sistemas de Vendas"
                        texto="Plataformas completas com dashboard para clientes e administradores, controle de pedidos e gestão de produtos."
                    />

                    <ContainerComBotao
                        titulo="4.Aplicações Web"
                        texto="Sistemas dinâmicos com lógica de programação, cálculos e interação em tempo real com o usuário."
                    />
                </div>
                

                <div className={CssOqueEuFaco.divLogo}>
                   <img src={logoEscuro} alt="logo da pagina cor preta" />
                </div>
            </div>
        </section>
    )
}

export default OqueEuFaco