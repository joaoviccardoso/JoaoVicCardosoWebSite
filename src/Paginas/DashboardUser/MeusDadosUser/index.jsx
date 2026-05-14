import { useState, useEffect } from "react"
import { atualizarUserLocal, pegarUser } from "../../../Utils/pegarUser"
import { validarFormularioAtualizarDados } from "../../../Utils/validarCadastro";
import { atualizarUsuario } from "../../../services/authServices";
import CssMeusDados from "./meusDadosUser.module.css"
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/BotaoAction";
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/ModalAviso";


function MeusDadosUser(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
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
            //chama a api para atualizar os dados
            const data = await atualizarUsuario(dadosParaEnviar)
            // atualiza o localStorage
            const userAtualizado = atualizarUserLocal(dadosParaEnviar) 
            setUserUser(userAtualizado)
            setForm({
                nomeCompleto: "", email: "", cpf: "",
                cep: "", endereco: "", numeroCasa: "", telefone: "",
            })
            setErroParaAtulizar("")
            abrirAviso(data.message)
        } catch (err) {
            abrirAviso(err.message)
        }
    }

    return(
        <section className={CssMeusDados.sectionMeusDados}>
            <div>
                <h1>Bem vindo user: {userUser.nomeCompleto}</h1>
                <p>Aqui você pode visualizar e atualizar suas informações pessoais. Mantenha seus dados sempre corretos para garantir uma melhor experiência e facilitar o contato quando necessário.</p>
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

                <div className={CssMeusDados.div2}>
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
                </div>

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

                <div className={CssMeusDados.div3}>

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
                </div>
                
                {erroParaAtualizar && <p className={CssMeusDados.erro}>{erroParaAtualizar}</p>}
                <BotaoAction child="Salvar" type="submit" />
            </form>
            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>

    )
}

export default MeusDadosUser