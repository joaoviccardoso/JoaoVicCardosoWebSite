import { useState, useEffect } from "react"
import CssMeusDados from "./meusDadosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/BotaoAction";
import { validarFormularioAtualizarDados } from "../../../Utils/validarCadastro";

function MeusDadosUser(){
    const [erroParaAtualizar, setErroParaAtulizar] = useState("")
    const [userUser, setUserUser] = useState({})
    const [form, setForm] = useState({
        nomeCompleto: "",
        email: "",
        cpf: "",
        cep: "",
        endereco: "",
        numeroCasa: "",
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

    async function handleSubmit(e) {
        e.preventDefault();


        // Verifica se ao menos um campo foi preenchido
        const algumCampoPreenchido = Object.values(form).some(v => v !== "");
        if (!algumCampoPreenchido) {
            setErroParaAtulizar("Preencha ao menos um campo para atualizar.");
            return;
        }
        // valida o formulario e me retorna uma mensagem
        const erroParaAtualizar = validarFormularioAtualizarDados(form)
        if(erroParaAtualizar){
            setErroParaAtulizar(erroParaAtualizar)
            return;
        }

        const dadosParaEnviar = Object.fromEntries(
            Object.entries(form).filter(([_, v]) => v !== "")
        );

        try {
            const res = await fetch(`http://localhost:3000/auth/atualizarDados/${userUser._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosParaEnviar),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Erro ao atualizar");

            const userAtualizado = { ...userUser, ...data.user };
            localStorage.setItem("user", JSON.stringify(userAtualizado));

            setUserUser(userAtualizado);
            
            setForm({
                nomeCompleto: "", email: "", cpf: "",
                cep: "", endereco: "", numeroCasa: "", telefone: "",
            });

            setErroParaAtulizar("")

            alert("Dados atualizados com sucesso!");
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <section className={CssMeusDados.sectionMeusDados}>
            <div>
                <h1>Bem vindo user: {userUser.nomeCompleto}</h1>
                <p>Aqui você pode visualizar e atualizar suas informações pessoais.</p>
            </div>
            <form onSubmit={handleSubmit} className={CssMeusDados.formDadosCliete}>

                <Input 
                    label="Nome" 
                    name="nomeCompleto" 
                    value={form.nomeCompleto} 
                    onChange={handleChange}
                    placeholder={userUser.nomeCompleto || "Nome completo"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />

                <Input      
                    label="Telefone"    
                    type="tel" name="telefone"
                    value={form.telefone} 
                    onChange={handleChange}
                    placeholder={userUser.telefone || "Telefone"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />

                <Input 
                    label="CPF" 
                    type="number" 
                    name="cpf"
                    value={form.cpf} onChange={handleChange}
                    placeholder={userUser.cpf || "CPF"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />

                <Input 
                    label="E-mail" 
                    type="email" 
                    name="email"
                    value={form.email} onChange={handleChange}
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    placeholder={userUser.email || "E-mail"} 
                />

                <Input 
                    label="Endereço" 
                    name="endereco" 
                    value={form.endereco} 
                    onChange={handleChange}
                    placeholder={userUser.endereco || "Endereço"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />

                <Input 
                    label="CEP" 
                    type="number" 
                    name="cep" 
                    value={form.cep} 
                    onChange={handleChange}
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    placeholder={userUser.cep || "CEP"} 
                />

                <Input 
                    label="Número" 
                    name="numeroCasa"
                    value={form.numeroCasa} 
                    onChange={handleChange}
                    placeholder={userUser.numeroCasa || "Número"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />
                {erroParaAtualizar && <p className={CssMeusDados.erro}>{erroParaAtualizar}</p>}
                <BotaoAction child="Salvar" type="submit" />
            </form>
        </section>
    )
}

export default MeusDadosUser