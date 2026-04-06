import CssSobreMim from "./sobreMim.module.css"
import SecaoHeroSobreMim from "./sections/sectionHeroSobreMim"
import SecaoQueSouEu from "./sections/sectionQuemSouEu"
import SecaoHabilidades from "./sections/sectionHabilidades"

function SobreMim(){
    return(
        <section>
            <SecaoHeroSobreMim/>
            <div>
                <SecaoQueSouEu/>
            </div>
            <SecaoHabilidades/>
        </section>
    )
}

export default SobreMim