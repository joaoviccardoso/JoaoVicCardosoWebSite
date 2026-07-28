import CssFuncio from "./funcionalidades.module.css"
import CardBlackMedio from "../../../../../Componentes/ComponetesCards/CardBlackMedio"
import MinhasHabilidades from "../../../../../Componentes/ComponetesCards/MinhasHabilidades"

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
                            <CardBlackMedio
                                tag={"Funcionalidade"}
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
                                img={`/tecnologias/${tec}`}
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