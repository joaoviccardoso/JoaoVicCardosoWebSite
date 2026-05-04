import { useState, useEffect } from "react"
import CssMeusDados from "./meusDadosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/BotaoAction";

function MeusDadosUser(){
    const [userUser, setUserUser] = useState({})
    const [form, setForm] = useState({
        nome: "",
        email: "",
        cpf: "",
        cep: "",
        endereco: "",
        numero: "",
        telefone: "",
    });    

    useEffect(() => {
        setUserUser(pegarUser())
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }

    return(
        <section className={CssMeusDados.sectionMeusDados}>
            <div>
                <h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1>
                <p>Aqui você pode visualizar e atualizar suas informações pessoais. Mantenha seus dados sempre corretos para garantir uma melhor experiência e facilitar o contato quando necessário.</p>
            </div>
            <form onSubmit={handleSubmit} className={CssMeusDados.formDadosCliete}>
                
                    <Input
                        label="Nome"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        className={CssMeusDados.inputNome}
                        placeholder={`${userUser.nomeCompleto}`}
                    />
                    <Input
                        label="Telefone"
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        className={".inputTelefoneMeusDados"}
                        placeholder={`${userUser.telefone}`}
                    />
                    <Input
                        label="CPF"
                        type="number"
                        name="number"
                        value={form.cpf}
                        onChange={handleChange}
                        className={CssMeusDados.inputCpf}
                        placeholder={`${userUser.cpf ? userUser.cpf : "CPF"}`}
                    />

                    <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={CssMeusDados.inputEmail}
                        placeholder={`${userUser.email}`}
                    />
                
                    <Input
                        label="Endereço"
                        type="address"
                        name="address"
                        value={form.endereco}
                        onChange={handleChange}
                        className={CssMeusDados.inputCpf}
                        placeholder={`${userUser.endereco ? userUser.endereco : "Endereço"}`}
                    />

                    <Input
                        label="CEP"
                        type="number"
                        name="number"
                        value={form.cep}
                        onChange={handleChange}
                        className={CssMeusDados.inputCpf}
                        placeholder={`${userUser.cep ? userUser.cep : "CEP"}`}
                    />

                
                    <BotaoAction
                        child="Salvar"
                        type="submit"
                    />
            </form>
        </section>
    )
}

export default MeusDadosUser