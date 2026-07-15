import CssSobreMim from "./sobreMim.module.css"
import SecaoHeroSobreMim from "./sections/sectionHeroSobreMim"
import SecaoQueSouEu from "./sections/sectionQuemSouEu"
import SecaoHabilidades from "./sections/sectionHabilidades"

function SobreMim(){
    return(
        <section className={CssSobreMim.secaoPaginaSobreMim}>
            <SecaoHeroSobreMim/>
            <div className={CssSobreMim.divBackGroundVerdeQuemSouEu}>
                <SecaoQueSouEu/>

                <div className={CssSobreMim.header}>   
                    <h3>Habilidades Técnicas</h3>
                    <p>Aqui estão as tecnologias que uso para transformar ideias em projetos reais.</p>
                </div>
            </div>
            <SecaoHabilidades/>
        </section>
    )
}

export default SobreMim