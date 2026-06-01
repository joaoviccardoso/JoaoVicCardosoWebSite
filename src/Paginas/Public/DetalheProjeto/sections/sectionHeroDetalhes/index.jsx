import BotaoCta from "../../../../../Componentes/BotaoCta"
import CssFuncio from "./heroDetalhe.module.css"
import MinhasHabilidades from "../../../../../Componentes/MinhasHabilidades/index.jsx"
import logoDev from '../../../../../assets/logoEscuro.png'

function SecaoHeroDetalhes({titulo, descricao, linkProjeto, linkGithub, imgProjeto}){
    return(
        <section className={CssFuncio.secaoHeroDetalhes} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '60%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className={CssFuncio.divTituloHero}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <div>
                    <BotaoCta
                        child="Ver Projeto Online"
                        to={linkProjeto}
                    />
                    <BotaoCta
                        child="Codigo no Github"
                        to={linkGithub}
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