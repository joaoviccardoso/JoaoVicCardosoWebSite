import LinkParaNavegacao from '../Links/link'
import BtnLogin from '../Buttons/BotaoLogin'

function ListaNav({className}){
    return(
        <>
            <LinkParaNavegacao
                child="Home"
                to="/"
                className={className}
            />
            <LinkParaNavegacao
                child="Serviços"
                to="/Servicos"
                className={className}
            />
            <LinkParaNavegacao
                child="Sobre mim"
                to="/SobreMim"
                className={className}
            />
            <LinkParaNavegacao
                child="Portfólio"
                to="/Portfolio"
                className={className}
            />
            <LinkParaNavegacao
                child="Contato"
                to="/Contato"
                className={className}
            />
            <div>
                <BtnLogin/>
            </div>
        </>
    )
}

export default ListaNav