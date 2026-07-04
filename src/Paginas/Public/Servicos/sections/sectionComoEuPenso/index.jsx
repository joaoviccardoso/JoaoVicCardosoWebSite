import { useRef } from "react"
import CssComoEuPenso from "./comoEuPenso.module.css"
import CardBlackMedio from "../../../../../Componentes/ComponetesCards/CardBlackMedio";
import CardVerde from "../../../../../Componentes/ComponetesCards/CardVerde";
import { useScrollAnimation } from "../../../../../hooks/useScrollAnimation";
import { useScrollAnimationUp } from "../../../../../hooks/useScrollAnimationUp";

function ComoEuPenso(){
   
    const ell = useRef(null);
    const elr = useRef(null);
    const card1 = useRef(null)

    useScrollAnimation(ell, ["#containerPasso1", "#containerPasso2", "#containerPasso3"])
    useScrollAnimationUp(elr, ["#containerPasso4", "#containerPasso5"])
 
    
    return(
        <section className={CssComoEuPenso.secaoComoEuPenso}>
            <div className={CssComoEuPenso.containerTexto}>
                <h3>Como Eu Penso em um Projeto</h3>
                <p>Você não está apenas contratando um desenvolvedor. <br /> Está garantindo:</p>
            </div>

            <div className={CssComoEuPenso.containerPassos} >
                <div className={CssComoEuPenso.divPasso1} ref={ell}>
                    <CardVerde
                        ref={card1}
                        tag={"Como eu penso"}
                        titulo={"1. Entendimento do Negócio"}
                        texto={"Eu analiso seu público, seus objetivos e o que seu negócio realmente precisa."}
                    />
                </div>

                <div className={CssComoEuPenso.divPasso2} ref={elr}>
                    <CardBlackMedio
                        tag={"Como eu penso"}
                        titulo={"2. Planejamento Estratégico"}
                        texto={"Defino estrutura, funcionalidades e experiência do usuário antes de começar a desenvolver."}
                        ref={card1}
                    />

                    <CardBlackMedio
                        tag={"Como eu penso"}
                        titulo={"3. Desenvolvimento Organizado"}
                        texto={"Defino estrutura, funcionalidades e experiência do usuário antes de começar a desenvolver."}
                        ref={card1}
                    />

                    <CardBlackMedio
                        tag={"Como eu penso"}
                        titulo={"4. Entrega e Ajustes"}
                        texto={"Testes, melhorias e refinamentos antes da entrega final."}
                        ref={card1}
                    />

                    <CardBlackMedio
                        tag={"Como eu penso"}
                        titulo={"5. Suporte Inicial"}
                        texto={"Acompanhamento após a entrega para garantir que tudo funcione perfeitamente"}
                        ref={card1}
                    />
                </div>
            </div>
        </section>
    )
}

export default ComoEuPenso