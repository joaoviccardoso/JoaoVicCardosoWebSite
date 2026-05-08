import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CssAcao1 from "./cadastraCliente.module.css"
import { pegarUser } from "../../../../../Utils/pegarUser"
import Input from "../../../../../Componentes/Input"
import BotaoAction from "../../../../../Componentes/BotaoAction"
import StatusSelect from "../../../../../Componentes/Select"
import { validarFormularioAtualizarDados } from "../../../../../Utils/validarCadastro"
import { atualizarUsuario } from "../../../../../services/authServices"

const STATUS_OPTIONS = [
  { value: "admin", label: "Adimin" },
  { value: "socio", label: "Sócio(a)" },
  { value: "user", label: "Cliente" },
]

function AcaoEditarCliente(){
    const { id } = useParams()
    const [clienteAtual, setClienteAtual] = useState({})
    const [erroParaAtualizar, setErroParaAtulizar] = useState("")
    const [userAdm, setUserAdm] = useState({})
    const [form, setForm] = useState({
        nomeCompleto: "",
        email: "",
        cpf: "",
        cep: "",
        endereco: "",
        numeroCasa: "",
        telefone: "",
        role: "",
    });   
        
    useEffect(()=>{
        setUserAdm(pegarUser())
    },[])
    
    //alterada o valor do obejeto correto no momento que digita nele
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
                const data = await atualizarUsuario(dadosParaEnviar, id)
    
                setClienteAtual(prev => ({ ...prev, ...dadosParaEnviar })) // 👈 atualiza o estado do client
                setForm({
                    nomeCompleto: "",
                    email: "",
                    cpf: "",
                    cep: "",
                    endereco: "",
                    numeroCasa: "",
                    telefone: "",
                    role: "",
                })
                setErroParaAtulizar("")
                alert(data.message)
            } catch (err) {
                alert(err.message)
            }
        }
    
    useEffect(() => {
        async function getClientePorId() {
            const token = localStorage.getItem("token")
            try {
                const resposta = await fetch(`http://localhost:3000/auth/user/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                })

                if (!resposta.ok) return

                const data = await resposta.json()
                setClienteAtual(data)
            } catch (error) {
                alert(`Erro ao buscar cliente: ${error}`)
            }
        }

        if (id) getClientePorId()
    }, [id])

    return(
        <section className={CssAcao1.secaoTelaCadastro}>
            <div>
                <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
                <p>Nesta área você pode visualizar, os dados do cliente e editar eles.</p>
            </div>
            <form onSubmit={handleSubmit} className={CssAcao1.formDadosCliete}>
                <Input
                    label="Nome" 
                    name="nomeCompleto" 
                    value={form.nomeCompleto} 
                    onChange={handleChange}
                    placeholder={clienteAtual.nomeCompleto || "Nome completo"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />

                <div className={CssAcao1.div2}>
                    <Input      
                        label="Telefone"    
                        type="tel" name="telefone"
                        value={form.telefone} 
                        onChange={handleChange}
                        placeholder={clienteAtual.telefone || "Telefone"} 
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    />

                    <Input 
                        label="CPF" 
                        type="number" 
                        name="cpf"
                        value={form.cpf} onChange={handleChange}
                        placeholder={clienteAtual.cpf || "CPF"} 
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    />
                </div>

                <div className={CssAcao1.div3}>
                    <Input 
                        label="Endereço" 
                        name="endereco" 
                        value={form.endereco} 
                        onChange={handleChange}
                        placeholder={clienteAtual.endereco || "Endereço"} 
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    />

                    <Input 
                        label="CEP" 
                        type="number" 
                        name="cep" 
                        value={form.cep} 
                        onChange={handleChange}
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                        placeholder={clienteAtual.cep || "CEP"} 
                    />

                    <Input 
                        label="Número" 
                        name="numeroCasa"
                        value={form.numeroCasa} 
                        onChange={handleChange}
                        placeholder={clienteAtual.numeroCasa || "Número"} 
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    />
                </div>

                <div className={CssAcao1.div3}>
                    <Input 
                        label="E-mail" 
                        type="email" 
                        name="email"
                        value={form.email} onChange={handleChange}
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                        placeholder={clienteAtual.email || "E-mail"} 
                    />

                    <StatusSelect
                        label="Role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        STATUS_OPTIONS={STATUS_OPTIONS}
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    />
                </div>
                
                {erroParaAtualizar && <p className={CssAcao1.erro}>{erroParaAtualizar}</p>}
                <BotaoAction child="Salvar" type="submit" />
            </form>

        </section>
    )
}

export default AcaoEditarCliente