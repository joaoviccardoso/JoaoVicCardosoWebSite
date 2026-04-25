import CssQuemSouEu from "./quemSouEu.module.css"
import BotaoCta from "../../../../../Componentes/BotaoCta"
import imgJoaoDev from "../../../../../assets/fotoDoJoaoDesenvolvedorDaPagina.png"

function SecaoQueSouEu(){
    return(
        <section className={CssQuemSouEu.secaoQuemSouEu}>
            <img className={CssQuemSouEu.imagemQuemSou} src={imgJoaoDev} alt="Foto do desenvolvedor da pagina" />

            <div className={CssQuemSouEu.divQuemSouEuTexto}>
                <h3>Desenvolvedor focado em transformar ideias em soluções digitais</h3>
                <p>Sou João Victor, desenvolvedor front-end apaixonado por transformar ideias em produtos digitais bem estruturados. Trabalho com foco em performance, organização e crescimento constante.</p>
                <div>
                    <BotaoCta
                        child="Conheça meus Projetos"
                        to="/Portfolio"
                    />
                </div>
            </div>
        </section>
    )
}

export default SecaoQueSouEu