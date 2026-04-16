import CssMotivacao from "./motivacao.module.css"

function SecaoMotivacao({textoMotivacao}){
    return(
        <section className={CssMotivacao.secaoMotivacao}>
            <h3>Motivação do Projeto</h3>
            <p>{textoMotivacao}</p>
        </section>
    )
}

export default SecaoMotivacao