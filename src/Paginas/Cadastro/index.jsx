import { useState } from "react";
import CssCadastro from "./cadastro.module.css"
import BemVindo from "../../Componentes/MensagemBemVindo"
import Input from "../../Componentes/Input";
import ImgLink from "../../Componentes/imgLink";
import BotaoAction from "../../Componentes/BotaoAction";
import voltarPagina from "../../assets/voltarPagina.svg"

function TelaCadastro(){
    const [form, setForm] = useState({
            primeiroNome: "",
            sobreNome: "",
            email:"",
            senha: "",
            confirmarSenha:"",
            numero:""
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
        <section>
            <BemVindo
                titulo="Bem-vindo à nossa plataforma"
                texto="Crie sua conta e tenha acesso a ferramentas pensadas para facilitar sua rotina e organizar tudo em um só lugar."
            />
            <section>
                <ImgLink
                    to="/"
                    srcImg={voltarPagina}
                />
                <form onSubmit={handleSubmitLogin} className={CssCadastro.formLogin}>
                    <div>
                        <Input
                            label="Primeiro Nome"
                            type="text"
                            name="primeiroNome"
                            value={form.primeiroNome}
                            onChange={handleChangeLogin}
                            className={CssCadastro.primeiroNome}
                            placeholder="Primeiro Nome"
                        />

                        <Input
                            label="Sobre Nome"
                            type="text"
                            name="sobreNome"
                            value={form.sobreNome}
                            onChange={handleChangeLogin}
                            className={CssCadastro.SobreNome}
                            placeholder="Sobre Nome"
                        />
                    </div>

                    <div>
                        <Input
                            label="E-mail"
                            name="email"
                            value={form.email}
                            onChange={handleChangeLogin}
                            className={CssCadastro.inputEmailCadastro}
                            placeholder="E-mail"
                        />

                        <Input
                            label="Senha"
                            type="password"
                            name="senha"
                            value={form.senha}
                            onChange={handleChangeLogin}
                            className={CssCadastro.inputSenhaCadastro}
                            placeholder="Senha"
                        />

                        <Input
                            label="Confiramr Senha"
                            type="number"
                            name="confirmarSenha"
                            value={form.confirmarSenha}
                            onChange={handleChangeLogin}
                            className={CssCadastro.inputSenhaCadastro}
                            placeholder="Confirmar Senha"
                        />
                    </div>

                    <div>
                        <Input
                            label="Numero"
                            type="number"
                            name="numero"
                            value={form.numero}
                            onChange={handleChangeLogin}
                            className={CssCadastro.inputSenhaCadastro}
                            placeholder="Telefone"
                        />

                        <BotaoAction
                            child="Fazer Cadastro"
                            type="submit"
                        />
                    </div>
                </form>
            </section>
        </section>
    )
}

export default TelaCadastro