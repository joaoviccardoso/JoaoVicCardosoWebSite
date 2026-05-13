import CssEmDev from "./EmDesenvilvimento.module.css"

function PaginaEmDesenvolvimento(){
    return(
        <section className={CssEmDev.container}>
            <div className={CssEmDev.card}>
                <h1>🚧 Em desenvolvimento</h1>

                <p>
                    Essa funcionalidade ainda não está disponível.
                </p>

                <p>
                    O projeto está em fase de demonstração e estamos trabalhando
                    para entregar a melhor experiência possível.
                </p>

                <span>Em breve você poderá utilizar essa parte 🚀</span>
            </div>
        </section>
    )
}

export default PaginaEmDesenvolvimento