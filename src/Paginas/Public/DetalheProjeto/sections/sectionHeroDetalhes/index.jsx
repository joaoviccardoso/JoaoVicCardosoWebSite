import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta/index.jsx"
import CssFuncio from "./heroDetalhe.module.css"
import MinhasHabilidades from "../../../../../Componentes/ComponetesCards/MinhasHabilidades/index.jsx"
import logoDev from '../../../../../assets/logoEscuro.png'

function SecaoHeroDetalhes({titulo, descricao, imgProjeto, linkProjetoOnline, linkProjetoGitHub}){
    return(
        <section className={CssFuncio.secaoHeroDetalhes} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '60%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className={CssFuncio.divTituloHero}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <div>
                    <BotaoCta
                        child="Ver Projeto Online"
                        to={linkProjetoOnline}
                    />
                    <BotaoCta
                        child="Codigo no Github"
                        to={linkProjetoGitHub}
                    />
                </div>
            </div>

            <div className={CssFuncio.divHeroImagemProjeto}>
                <img className={CssFuncio.imagemProjeto} src={imgProjeto} alt="Imagem do projeto " />
            </div>
        </section>
    )
}

export default SecaoHeroDetalhes