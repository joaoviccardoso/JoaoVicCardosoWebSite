import { useState, useEffect } from "react";
import CssAcaoProduto3 from "./cadastroProdutoPc.module.css"
import TextArea from "../../../../../Componentes/TextArea";
import Input from "../../../../../Componentes/Input";
import BotaoAction from "../../../../../Componentes/BotaoAction";
import StatusSelect from "../../../../../Componentes/Select";
import { validarFormularioCadastrarProduto } from "../../../../../Utils/validarCadastro";
import { jwtDecode } from "jwt-decode";
import { postProdutosPC } from "../../../../../services/produtosServices";
import { getUserPorNome } from "../../../../../services/authServices";

const STATUS_OPTIONS = [
  { value: "desenvolvimento", label: "Desenvolvimento" },
  { value: "testes", label: "Testes" },
  { value: "criando_o_design", label: "Criando o design" },
  { value: "concluido", label: "Concluído" },
  { value: "pausado", label: "Pausado" },
]

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
        const token = localStorage.getItem("token");
        if (!token) return;
        
        // pega só o necessário do token
        const decoded = jwtDecode(token);
        setUserAdm(decoded); // decoded tem { id, role }
    }, []);
    
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
            //chama a rota para fazer o cadastro passado o formulario
            const cadastrado = await postProdutosPC(form)

            //limpa o form
            setForm({nomeProjeto: "",status: "",cliente: "",dateEntrega: "",clienteNome: "",linkContrato: "",linkDemo: "",obser: "",});

            //limpar erro 
            setCadastrarErro("")
            alert(cadastrado.message)
        } catch (error) {
            alert(`Erro ao cadastrar produto ${error}`);
        }
    }

    async function buscarClientes(nome) {
        if (nome.length < 2) return; // só busca a partir de 2 letras
        try{
            const data = await getUserPorNome(nome);
            setClientesBuscados(data);
        } catch (error) {
            alert(`Erro ao buscar cliente ${error}`);
        }
    }
    
    return(
        <section className={CssAcaoProduto3.sectionCadastrarPC}>
            <div>
                <h1>Bem vindo, {userAdm.role}</h1>
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
                        STATUS_OPTIONS={STATUS_OPTIONS}
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