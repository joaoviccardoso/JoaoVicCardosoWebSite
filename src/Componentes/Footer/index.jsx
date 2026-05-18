import CssFooter from "./footer.module.css"
import ListaNav from "../ListaNav";
import Image from "../Img";
import logoLinkedin from '../../assets/linkedin.svg'
import logoGithub from '../../assets/github.svg'
import logInstagram from '../../assets/instagram.svg'
import logoGmail from '../../assets/gmail.svg'
import logoWhatsapp from '../../assets/whatsapp.svg'
import logoDev from '../../assets/logoDev.svg'

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
                            src={logoLinkedin}
                            alt="Link para meu Linkedin"
                            width={75}
                            className="logoRedes"
                        />

                        <Image
                            href="https://github.com/joaoviccardoso"
                            src={logoGithub}
                            alt="logo github"
                            width={75}
                            className="logoRedes"
                        />

                        <Image
                            href="https://www.instagram.com/joao__viccardoso/"
                            src={logInstagram}
                            alt="logo instagram"
                            width={75}
                            className="logoRedes"
                        />

                        <Image
                            href=""
                            src={logoGmail}
                            alt="logo gmail"
                            width={75}
                            className="logoRedes"
                        />

                        <Image
                            href="https://web.whatsapp.com/send?phone=5519992861087"
                            src={logoWhatsapp}
                            alt="logo whatsapp"
                            width={75}
                            className="logoRedes"
                        />
                    </ul>
                </section>

                <section className={CssFooter.footerSobre}>
                    <Image
                        href="https://www.jvcode.tech/"
                        src={logoDev}
                        alt="Logo da pagina"
                        width={180}
                        className="logoFooter"
                    />
                    <div className={CssFooter.divTextoFooter}>
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