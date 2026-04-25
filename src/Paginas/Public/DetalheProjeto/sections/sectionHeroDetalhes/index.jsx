import BotaoCta from "../../../../../Componentes/BotaoCta"
import CssFuncio from "./heroDetalhe.module.css"
import { tecnologiasImagens } from "../../../../../constants/tecnologiasImagens.js"
import MinhasHabilidades from "../../../../../Componentes/MinhasHabilidades/index.jsx"
import logoDev from '../../../../../assets/logoEscuro.png'

function SecaoHeroDetalhes({titulo, descricao, tecnologias}){
    return(
        <section className={CssFuncio.secaoHeroDetalhes} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '60%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className={CssFuncio.divTituloHero}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <div>
                    <BotaoCta
                        child="Entre em Contato"
                    />
                </div>
            </div>

            <ul className={CssFuncio.ulHeroTecnologias}>
                {tecnologias.map((tec)=>(
                    <li>
                        <MinhasHabilidades
                            key={tec}
                            img={tecnologiasImagens[tec]}
                            alt="tecnologias"
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SecaoHeroDetalhes