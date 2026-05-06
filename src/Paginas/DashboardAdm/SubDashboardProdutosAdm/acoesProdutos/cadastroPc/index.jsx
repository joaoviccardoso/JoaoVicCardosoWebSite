import { useState, useEffect } from "react";
import CssAcaoProduto3 from "./cadastroProdutoPc.module.css"
import { pegarUser } from "../../../../../Utils/pegarUser";
import TextArea from "../../../../../Componentes/TextArea";
import Input from "../../../../../Componentes/Input";
import BotaoAction from "../../../../../Componentes/BotaoAction";
import StatusSelect from "../../../../../Componentes/Select";
import { validarFormularioCadastrarProduto } from "../../../../../Utils/validarCadastro";

function AcaoCadastrarProdutoPc(){
    const [erroParaCadastrarPC,  setCadastrarErro] = useState("")
    const [userAdm, setUserAdm] = useState({})
    const [clientesBuscados, setClientesBuscados] = useState([]);
    const [form, setForm] = useState({
        nomeProjeto: "",
        status: "",
        cliente: "",    // ← guarda o _id
        clienteNome: "",  // ← guarda só o nome para exibir no input
        dateEntrega: "",
        linkContrato: "",
        linkDemo: "",
        obser: "",
    });

    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])
    
    function handleChange(e) {
        const { name, value } = e.target;
    
        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    }

    //envia o formulario para a api para realizar o cadastro.
    async function handleSubmit(e) {
        e.preventDefault();

        const erroParaAtualizar = validarFormularioCadastrarProduto(form)
        if(erroParaAtualizar){
            setCadastrarErro(erroParaAtualizar)
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/produtos/criar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await response.json();

            //limpa o form
            setForm({
                nomeProjeto: "",
                status: "",
                cliente: "",
                dateEntrega: "",
                clienteNome: "",
                linkContrato: "",
                linkDemo: "",
                obser: "",
            });
            //limpar erro 
            setCadastrarErro("")
            alert(data.message)
        } catch (error) {
            alert(`Erro ao cadastrar produto ${error}`);
        }
    }

    async function buscarClientes(nome) {
        if (nome.length < 2) return; // só busca a partir de 2 letras
        const res = await fetch(`http://localhost:3000/auth/buscar?nome=${nome}`);
        const data = await res.json();
        setClientesBuscados(data);
    }
    
    return(
        <section className={CssAcaoProduto3.sectionCadastrarPC}>
            <div>
                <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
                <p>Nesta área você pode cadastrar novos sites ou produtos adquiridos pelos clientes e acompanhar o andamento de cada projeto. Aqui é possível atualizar o status do desenvolvimento, adicionar o link da versão de demonstração (demo) e disponibilizar o contrato relacionado. Utilize este espaço para manter as informações organizadas e permitir que o cliente acompanhe o progresso do seu projeto de forma clara e transparente.</p>
            </div>
            <form onSubmit={handleSubmit} className={CssAcaoProduto3.formCadastrarProdutoCliente}>
                <div className={CssAcaoProduto3.div1}>
                    <Input
                        label="Nome do Projeto" 
                        name="nomeProjeto" 
                        value={form.nomeProjeto} 
                        type="text"
                        onChange={handleChange}
                        placeholder={"nomeProjeto"} 
                        className={`${erroParaCadastrarPC ? "inputErro" : ""}`}
                    />

                    <StatusSelect
                        label="Status do projeto"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    />
                </div>

                <div className={CssAcaoProduto3.div1}>
                    <div>
                        <Input
                            label="Cliente" 
                            name="clienteNome" 
                            value={form.clienteNome} 
                            type="text"
                            onChange={(e) => {
                                const valor = e.target.value;

                                setForm(prev => ({ 
                                    ...prev, 
                                    clienteNome: valor,
                                    cliente: ""  // ← limpa o ID quando digitar/apagar
                                }));

                                buscarClientes(e.target.value);
                            }}
                            placeholder={"Digite o nome do cliente"} 
                            className={`${erroParaCadastrarPC ? "inputErro" : ""}`}
                        />
                        <ul className={CssAcaoProduto3.listaUl}>
                            {/* Lista de sugestões */}
                            {clientesBuscados.map(user => (
                                <div className={CssAcaoProduto3.listaDiv} key={user._id} onClick={() => {
                                    setForm(prev => ({ ...prev, cliente: user._id, clienteNome: user.nomeCompleto }));
                                    setClientesBuscados([]); // fecha a lista
                                }}>
                                    {user.nomeCompleto} — {user.email}
                                </div>
                            ))}
                        </ul>
                    </div>
                    
                    

                    <Input
                        label="Data de Entrega" 
                        name="dateEntrega" 
                        type="date"
                        value={form.dateEntrega} 
                        onChange={handleChange}
                        className={`${erroParaCadastrarPC ? "inputErro" : ""}`}
                    />
                </div>

                <Input
                    label="Link do Contrato" 
                    name="linkContrato" 
                    type="text"
                    value={form.linkContrato} 
                    onChange={handleChange}
                    placeholder={"Link do Contrato"} 
                    className={`${erroParaCadastrarPC ? "inputErro" : ""}`}
                />

                <Input
                    label="Link da Demo" 
                    name="linkDemo" 
                    type="text"
                    value={form.linkDemo} 
                    onChange={handleChange}
                    placeholder={"Link da Demo"} 
                    className={`${erroParaCadastrarPC ? "inputErro" : ""}`}
                />

                <TextArea
                    label="Observações"
                    name="obser"
                    value={form.obser}
                    onChange={handleChange}
                    placeholder={"Observações"}
                    className={`${erroParaCadastrarPC ? "inputErro" : ""}`}
                />
                {erroParaCadastrarPC && <p className={CssAcaoProduto3.erro}>{erroParaCadastrarPC}</p>}
                <BotaoAction child="Salvar" type="submit" />
            </form>
        </section>
    )
}

export default AcaoCadastrarProdutoPc