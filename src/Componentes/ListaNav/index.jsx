import LinkParaNavegacao from '../Links/link'

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
                to="Servicos"
                className={className}
            />
            <LinkParaNavegacao
                child="Sobre mim"
                to="SobreMim"
                className={className}
            />
            <LinkParaNavegacao
                child="Portfólio"
                to="Portfolio"
                className={className}
            />
            <LinkParaNavegacao
                child="Contado"
                to="Contato"
                className={className}
            />
        </>
    )
}

export default ListaNav