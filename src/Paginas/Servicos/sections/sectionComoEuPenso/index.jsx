import { useRef } from "react"
import CssComoEuPenso from "./comoEuPenso.module.css"
import ContainerTexto from "../../../../Componentes/ContainerTexto"
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { useScrollAnimationRight } from "../../../../hooks/useScrollAnimationRight";

function ComoEuPenso(){
   
    const ell = useRef(null);
    const elr = useRef(null);

    useScrollAnimation(ell, ["#containerPasso1", "#containerPasso2", "#containerPasso3"])
    useScrollAnimationRight(elr, ["#containerPasso4", "#containerPasso5"])
 
    
    return(
        <section className={CssComoEuPenso.secaoComoEuPenso}>
            <div className={CssComoEuPenso.containerTexto}>
                <h3>Como Eu Penso em um Projeto</h3>
                <p>Você não está apenas contratando um desenvolvedor. <br /> Está garantindo:</p>
            </div>

            <div className={CssComoEuPenso.containerPassos} >
                <div className={CssComoEuPenso.divPasso1} ref={ell}>
                    <ContainerTexto
                        titulo="1. Entendimento do Negócio"
                        texto="Eu analiso seu público, seus objetivos e o que seu negócio realmente precisa."
                        id="containerPasso1"
                    />

                    <ContainerTexto
                        titulo="2. Planejamento Estratégico"
                        texto="Defino estrutura, funcionalidades e experiência do usuário antes de começar a desenvolver."
                        id="containerPasso2"
                    />

                    <ContainerTexto
                        titulo="3. Desenvolvimento Organizado"
                        texto="Defino estrutura, funcionalidades e experiência do usuário antes de começar a desenvolver."
                        id="containerPasso3"
                    />
                </div>

                <div className={CssComoEuPenso.divPasso2} ref={elr}>
                    <ContainerTexto
                        titulo="4. Entrega e Ajustes"
                        texto="Testes, melhorias e refinamentos antes da entrega final."
                        id="containerPasso4"
                    />

                    <ContainerTexto
                        titulo="5. Suporte Inicial"
                        texto="Acompanhamento após a entrega para garantir que tudo funcione perfeitamente."
                        id="containerPasso5"
                    />
                </div>
            </div>
        </section>
    )
}

export default ComoEuPenso