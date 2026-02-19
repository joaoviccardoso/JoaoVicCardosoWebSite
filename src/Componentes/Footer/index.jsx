import CssFooter from "./footer.module.css"
import ListaNav from "../ListaNav";
import Image from "../Img";

function Footer(){
    return(
        <div className={CssFooter.footer}>
            <div className={CssFooter.divFooter}>
               <nav className={CssFooter.navFooter}>
                <h3 className={CssFooter.h3Footer}>Navegação Rápida</h3>
                <ListaNav
                    className={CssFooter.linkPequeno}
                />
                </nav>

                <section className={CssFooter.footerContatos}>
                    <h3 className={CssFooter.h3Footer}>Contato e Redes</h3>
                    <ul className={CssFooter.containerRedes}>
                        <Image
                            href="https://www.linkedin.com/in/joaoviccardosodev/"
                            src="src/assets/linkedin.svg"
                            alt="Link para meu Linkedin"
                            width={58}
                            className="logoRedes"
                        />

                        <Image
                            href=""
                            src="src/assets/github.svg"
                            alt="Link"
                            width={58}
                            className="logoRedes"
                        />

                        <Image
                            href=""
                            src="src/assets/instagram.svg"
                            alt="Link"
                            width={58}
                            className="logoRedes"
                        />

                        <Image
                            href=""
                            src="src/assets/gmail.svg"
                            alt="Link"
                            width={58}
                            className="logoRedes"
                        />

                        <Image
                            href=""
                            src="src/assets/whatsapp.svg"
                            alt="Link"
                            width={58}
                            className="logoRedes"
                        />
                    </ul>
                </section>

                <section className={CssFooter.footerSobre}>
                    <Image
                        href="http://localhost:5173/"
                        src="src/assets/logoDev.svg"
                        alt="Logo da pagina"
                        width={100}
                        className="logoFooter"
                    />
                    <div>
                        <p className={CssFooter.textoFooter}>(João Victor | Dev & Design)</p>
                        <p className={CssFooter.textoFooter}>Criando soluções digitais que unem design e tecnologia.</p>
                    </div>
                </section> 
            </div>
            

            <p className={CssFooter.footerCopy}>
                &copy; 2026 João Victor - Todos os direitos reservados.
            </p>
        </div>
    )
}

export default Footer