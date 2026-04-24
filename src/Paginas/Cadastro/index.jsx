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
    
        async function handleSubmitLogin(e) {
            e.preventDefault();
            
            if (form.senha !== form.confirmarSenha) {
                return alert("Senhas não conferem");
            }

            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeCompleto: form.primeiroNome,
                    email: form.email,
                    senha: form.senha,
                    telefone: form.numero
                })
            });

            const data = await response.json();
            console.log(data);
        }

    return(
        <section className={CssCadastro.secaoTelaCadastro}>
            <BemVindo
                titulo="Bem-vindo à nossa plataforma"
                texto="Crie sua conta e tenha acesso a ferramentas pensadas para facilitar sua rotina e organizar tudo em um só lugar."
            />
            <section className={CssCadastro.secaoFormularioCadastro}>
                <ImgLink
                    to="/"
                    srcImg={voltarPagina}
                />
                <form onSubmit={handleSubmitLogin} className={CssCadastro.formCadastro}>
                    <h3>Crie sua conta pessoal</h3>
                    <p>Será enviado (solicitado) uma confirmação do cadastro por e-mail.</p>

                    <div className={CssCadastro.divContainerConta}>
                        <Input
                            label="Primeiro Nome Completo"
                            type="text"
                            name="primeiroNome"
                            value={form.primeiroNome}
                            onChange={handleChangeLogin}
                            className={CssCadastro.primeiroNome}
                            placeholder="Primeiro Nome"
                        />

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
                            label="Confirmar Senha"
                            type="password"
                            name="confirmarSenha"
                            value={form.confirmarSenha}
                            onChange={handleChangeLogin}
                            className={CssCadastro.inputSenhaCadastro}
                            placeholder="Confirmar Senha"
                        />
                    </div>

                    <div className={CssCadastro.divContainerInputNumero}>
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