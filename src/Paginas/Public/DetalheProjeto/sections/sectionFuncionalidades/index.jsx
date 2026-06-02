import CssFuncio from "./funcionalidades.module.css"
import CardFuncionalidade from "../../../../../Componentes/CardFuncionalidade"
import ContainerTexto from "../../../../../Componentes/ContainerTexto"
import { tecnologiasImagens } from "../../../../../constants/tecnologiasImagens"
import MinhasHabilidades from "../../../../../Componentes/MinhasHabilidades"

function SecaoFuncionalidade({ funcionalidades = [], tecnologias = [] }) {

    return (
        <section className={CssFuncio.secaoFuncionalidade}>
            {/*Secao Funcionalidades*/}   
            <div className={CssFuncio.divFuncionalidade}>
                <div className={CssFuncio.divTituloFuncionalidade}>
                    <h3>Funcionalidades Principais</h3>
                </div>
                <ul className={CssFuncio.ulHeroFuncionalidades}>
                    {funcionalidades?.map((funci, index)=>(
                        <li key={index}>
                            <ContainerTexto
                                titulo={funci.titulo}
                                texto={funci.descricao}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/*Linha vertical*/}   
            <span className={CssFuncio.linhaVertical}></span>

            {/* secao tecnologias*/}
            <div className={CssFuncio.divTecnologias}>
                <div className={CssFuncio.divTituloFuncionalidade}>
                    <h3>Stack Tecnológia</h3>
                </div>
                <ul className={CssFuncio.ulHeroTecnologias}>
                    {tecnologias.map((tec)=>(
                        <li key={tec}>
                            <MinhasHabilidades
                                img={tecnologiasImagens[tec]}
                                alt="tecnologias"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SecaoFuncionalidade