import CssContato from "./contato.module.css"
import MeusContato from "./sections/sectionContato"
import Formulario from "./sections/sectionForm"

function Contato(){
    return(
        <section className={CssContato.secaoPaginaContato}>
            <section className={CssContato.secaoMeusContatos}>
                <MeusContato/>
            </section>

            <section className={CssContato.secaoFormulario}>
                <Formulario/>
            </section>
        </section>
    )
}

export default Contato