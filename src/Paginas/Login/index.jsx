import { useState } from "react"
import CssLogin from "./login.module.css"
import BemVindo from "../../Componentes/MensagemBemVindo"
import ImgLink from "../../Componentes/imgLink"
import Input from "../../Componentes/Input"
import BotaoAction from "../../Componentes/BotaoAction"
import RadioGroup from "../../Componentes/RadioInput"
import LinkParaNavegacao from "../../Componentes/Links/link"
import voltarPagina from "../../assets/voltarPagina.svg"

function TelaLogin(){
    const [form, setForm] = useState({
        email: "",
        senha: ""
    });

    function handleChangeLogin(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        console.log(form);
    }

    return(
        <section className={CssLogin.sectionLogin}>
            <BemVindo
                titulo="Bem-vindo de volta"
                texto="Faça login para continuar e aproveitar todos os recursos disponíveis na plataforma."
            />
            <section className={CssLogin.containerFormularioLogin}>
                <ImgLink
                    to="/"
                    srcImg={voltarPagina}
                />
                <form onSubmit={handleSubmitLogin} className={CssLogin.formLogin}>
                    <div className={CssLogin.containerTexto}>
                        <h3>Bem-vindo de volta</h3>
                        <p>Faça login para continuar e aproveitar todos os recursos disponíveis na plataforma.</p>
                    </div>

                    <div className={CssLogin}>
                        <Input
                            label="E-mail"
                            name="email"
                            value={form.email}
                            onChange={handleChangeLogin}
                            className={CssLogin.inputEmail}
                            placeholder="E-mail"
                        />

                        <Input
                            label="Senha"
                            type="password"
                            name="senha"
                            value={form.senha}
                            onChange={handleChangeLogin}
                            className={CssLogin.inputSenha}
                            placeholder="Senha"
                        />
                    </div>
                    
                    <div className={CssLogin.containerEsqueceuAhSenha}>
                        <LinkParaNavegacao
                            to="/Cadastro"
                            child="Não tenho conta"
                            className="linkLogin"
                        />

                        <LinkParaNavegacao
                            to="/"
                            child="Esqueceu sua senha"
                            className=".linkLogin"
                        />
                    </div>

                    <BotaoAction
                        child="Fazer Login"
                        type="submit"
                    />
                </form>
            </section>
        </section>
    )
}

export default TelaLogin