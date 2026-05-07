import { useEffect, useState } from "react"
import CssAcao1 from "./cadastraCliente.module.css"
import { pegarUser } from "../../../../../Utils/pegarUser"

function AcaoCadastraCliente({userUser}){
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
        });   
        
        useEffect(()=>{
            setUserAdm(pegarUser())
        },[])
    
        function handleChange(e) {
            const { name, value } = e.target;
    
            setForm((prev) => ({
            ...prev,
            [name]: value
            }));
        }
    
        async function handleSubmit(e) {
            e.preventDefault();
            console.log(form)
    
            const algumCampoPreenchido = Object.values(form).some(v => v !== "");
            if (!algumCampoPreenchido) {
                setErroParaAtulizar("Preencha ao menos um campo para atualizar.");
                return;
            }
        }

    return(
        <section className={CssAcao1.secaoTelaCadastro}>
            <div>
                <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
            </div>
            <form onSubmit={handleSubmit} className={CssAcao1.formDadosCliete}>

                <Input 
                    label="Nome" 
                    name="nomeCompleto" 
                    value={form.nomeCompleto} 
                    onChange={handleChange}
                    placeholder={userUser.nomeCompleto || "Nome completo"} 
                    className={`${erroParaAtualizar ? "inputErro" : ""}`}
                />

                <div className={CssAcao1.div2}>
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

                <div className={CssAcao1.div3}>
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
                </div>
                
                {erroParaAtualizar && <p className={CssAcao1.erro}>{erroParaAtualizar}</p>}
                <BotaoAction child="Salvar" type="submit" />
            </form>

        </section>
    )
}

export default AcaoCadastraCliente