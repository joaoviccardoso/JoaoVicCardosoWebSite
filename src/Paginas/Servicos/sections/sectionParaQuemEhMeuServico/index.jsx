import CssParaQuemEh from "./paraQuemEhMeuServico.module.css"
import imgAutonomo from "../../../../assets/imgAutonosEhPrestadores.png"
import imgEmpresa from  "../../../../assets/imgEmpresaQuerModernizar.png"
import imgOrganizar from "../../../../assets/imgOrganizarOhNegocio.png"
import imgPequenos from "../../../../assets/imgPequenosNegocios.png"

function ParaQuemEh(){
    return(
        <section className={CssParaQuemEh.secaoParaQuemEh}>
            <h3>Para Quem é Meu Serviço</h3>
            <ul className={CssParaQuemEh.ulListaParaQuemEh}>
                <li>
                    <h6>Pequenos Negócios</h6>
                    <img src={imgPequenos} alt="Imagem ilustrando um pequeno negocio" />
                </li>
                <li>
                    <h6>Empresas que <br/> Querem Modernizar</h6>
                    <img src={imgEmpresa} alt="Imagem ilustrando um comercio que quer modernizar" />
                </li>
                <li>
                    <h6>Quem Precisa <br/> Organizar o Negócio</h6>
                    <img src={imgOrganizar} alt="Imagem ilustrando um comercio que precisa organizar o Negocio" />
                </li>
                <li>
                    <h6>Autônomos e Prestadores <br />de Serviço</h6>
                    <img src={imgAutonomo} alt="Imagem ilustrando um comercio de autonomos e prestadores de serviço" />
                </li>
            </ul>
        </section>
    )
}

export default ParaQuemEh