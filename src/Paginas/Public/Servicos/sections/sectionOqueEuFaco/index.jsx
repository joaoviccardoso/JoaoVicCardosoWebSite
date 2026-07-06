import { useRef } from "react"
import CssOqueEuFaco from "./oqueEuFaco.module.css"
import ContainerComBotao from "../../../../../Componentes/ContainerTextoComBotao"
import CardBlackMedio from "../../../../../Componentes/ComponetesCards/CardBlackMedio"
import { useScrollAnimation } from "../../../../../hooks/useScrollAnimation"

function OqueEuFaco() {
    const el = useRef();
    const card1 = useRef();
    const card2 = useRef();
    const card3 = useRef();
    const card4 = useRef();
    useScrollAnimation(el,[card1, card2, card3, card4])
    return(
        <section className={CssOqueEuFaco.sectionOqueEuFaco}>
            <div className={CssOqueEuFaco.containerTexto}>
                <h3>O Que Eu Faço</h3>
                <p>Desenvolvo páginas na internet pensadas para chamar atenção, explicar seu serviço de forma clara e aumentar suas chances de fechar vendas.</p>
            </div>

            <div className={CssOqueEuFaco.divInfoOqueEuFaco} ref={el}>
                <div className={CssOqueEuFaco.divConteinerComOsTexto}>
                    <CardBlackMedio
                        tag={"Como Transformo Ideias"}
                        titulo={"1.Landing Pages"}
                        texto={"Criação de páginas modernas e responsivas focadas em conversão e apresentação de produtos ou serviços."}
                        ref={card1}
                    />

                    <CardBlackMedio
                        tag={"Como Transformo Ideias"}
                        titulo={"2. Blogs"}
                        texto={"Desenvolvimento de blogs organizados, com leitura agradável e estrutura pensada para conteúdo e SEO."}
                        ref={card2}
                    />

                    <CardBlackMedio
                        tag={"Como Transformo Ideias"}
                        titulo={"3.Sistemas de Vendas"}
                        texto={"Plataformas completas com dashboard para clientes e administradores, controle de pedidos e gestão de produtos."}
                        ref={card3}
                    />

                    <CardBlackMedio
                        tag={"Como Transformo Ideias"}
                        titulo={"4.Aplicações Web"}
                        texto={"Sistemas dinâmicos com lógica de programação, cálculos e interação em tempo real com o usuário."}
                        ref={card4}
                    />
                </div>
            </div>
        </section>
    )
}

export default OqueEuFaco