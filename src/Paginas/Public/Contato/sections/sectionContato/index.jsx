import CssContato from "./contato.module.css"
import Image from "../../../../../Componentes/ImgLogo"
import logoLinkedin from "../../../../../assets/linkedin.svg"
import logoGithub from "../../../../../assets/github.svg"
import logInstagram from '../../../../../assets/instagram.svg'
import logoGmail from '../../../../../assets/gmail.svg'
import logoWhatsapp from '../../../../../assets/whatsapp.svg'

function MeusContato(){
    return(
        <div className={CssContato.divMeusContatos}>
            <div className={CssContato.divContainerTexto}>
                <h3>Bem vindo, Entre em contato.</h3>
                <p>Seja bem vindo a seção contato voce pode entrar em contato comigo pelo formas a baixo escolha a forma que previrir ou preencha o formulario.</p>
            </div>

            <ul className={CssContato.containerRedesParaContato}>
                <li>
                    <Image
                        href="https://www.linkedin.com/in/joaoviccardosodev/"
                        src={logoLinkedin}
                        alt="Link para meu Linkedin"
                        width={75}
                        className="logoRedes"
                    />
                </li>
                <li>
                    <Image
                        href="https://github.com/joaoviccardoso"
                        src={logoGithub}
                        alt="logo github"
                        width={75}
                        className="logoRedes"
                    />
                </li>
                <li>
                    <Image
                        href="https://www.instagram.com/joao__viccardoso/"
                        src={logInstagram}
                        alt="logo instagram"
                        width={75}
                        className="logoRedes"
                    />
                </li>
                <li>
                    <Image
                        href=""
                        src={logoGmail}
                        alt="logo gmail"
                        width={75}
                        className="logoRedes"
                    />
                </li>
                <li>
                    <Image
                        href="https://wa.me/5519992861087?text=Olá,%20vim%20pelo%20site!"
                        src={logoWhatsapp}
                        alt="logo whatsapp"
                        width={75}
                        className="logoRedes"
                    />
                </li>
            </ul>
        </div>
    )
}

export default MeusContato