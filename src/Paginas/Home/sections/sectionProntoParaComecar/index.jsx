import { useRef } from "react";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import CssProntoParaComecar from "./prontoParaComecar.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"
import iconePagina from '../../../../assets/iconePaginaWeb.svg'

function ProntoParaComecar(){
    const el = useRef();

    useScrollAnimation(el, ["#tituloPaginaProntoParaComecar", "#textoPaginaProntoParaComecar", "#btnCtaSecaoProntoParaComecar"])

    return(
        <section className={CssProntoParaComecar.secaoProntoParaComecar}>
            <div className={CssProntoParaComecar.containerTexto} ref={el}>
                <h3 id='tituloPaginaProntoParaComecar'>Pronto para transformar suas ideias em realidade?</h3>
                <p id='textoPaginaProntoParaComecar'>Seja para um projeto, uma parceria ou só trocar uma ideia, será um prazer conversar com você.</p>
                <BotaoCta
                    child="Entre em contato"
                    to="Contato"
                    id="btnCtaSecaoProntoParaComecar"
                />
            </div>
            <img src={iconePagina} alt="imagem ilustrativa de uma pagina web" />
        </section>
    )
}

export default ProntoParaComecar