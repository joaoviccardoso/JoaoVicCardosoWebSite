import { useRef } from "react"
import { useScrollAnimationUp } from "../../../../../hooks/useScrollAnimationUp"
import CssParaQuemEh from "./paraQuemEhMeuServico.module.css"
import imgAutonomo from "../../../../../assets/imgAutonosEhPrestadores.png"
import imgEmpresa from  "../../../../../assets/imgEmpresaQuerModernizar.png"
import imgOrganizar from "../../../../../assets/imgOrganizarOhNegocio.png"
import imgPequenos from "../../../../../assets/imgPequenosNegocios.png"

function ParaQuemEh(){
    const el = useRef();
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    const card4Ref = useRef();
    useScrollAnimationUp(el, [card1Ref, card2Ref, card3Ref, card4Ref])

    return(
        <section className={CssParaQuemEh.secaoParaQuemEh}>
            <h3>Para Quem é Meu Serviço</h3>
            <ul className={CssParaQuemEh.ulListaParaQuemEh} ref={el}>
                <li id="item1ListaParaQuemEh" ref={card1Ref}>
                    <h6>Pequenos Negócios</h6>
                    <img src={imgPequenos} alt="Imagem ilustrando um pequeno negocio" />
                </li>
                <li id="item2ListaParaQuemEh" ref={card2Ref}>
                    <h6>Empresas que <br/> Querem Modernizar</h6>
                    <img src={imgEmpresa} alt="Imagem ilustrando um comercio que quer modernizar" />
                </li >
                <li id="item3ListaParaQuemEh" ref={card3Ref}>
                    <h6>Quem Precisa <br/> Organizar o Negócio</h6>
                    <img src={imgOrganizar} alt="Imagem ilustrando um comercio que precisa organizar o Negocio" />
                </li>
                <li id="item4ListaParaQuemEh" ref={card4Ref}>
                    <h6>Autônomos e Prestadores <br />de Serviço</h6>
                    <img src={imgAutonomo} alt="Imagem ilustrando um comercio de autonomos e prestadores de serviço" />
                </li>
            </ul>
        </section>
    )
}

export default ParaQuemEh