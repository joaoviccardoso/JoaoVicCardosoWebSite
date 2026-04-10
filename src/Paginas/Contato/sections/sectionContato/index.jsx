import CssContato from "./contato.module.css"

function MeusContato(){
    return(
        <div className={CssContato}>
            <div className={CssContato}>
                <h3>Bem vindo, Entre em contato.</h3>
                <p>Seja bem vindo a seção contato voce pode entrar em contato comigo pelo formas a baixo escolha a forma que previrir ou preencha o formulario.</p>
            </div>

            <ul className={CssContato}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default MeusContato