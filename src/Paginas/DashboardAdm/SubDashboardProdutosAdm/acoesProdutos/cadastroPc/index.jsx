import { useState, useEffect } from "react";
import CssAcaoProduto3 from "./cadastroProdutoPc.module.css"
import TextArea from "../../../../../Componentes/TextArea";
import Input from "../../../../../Componentes/Input";
import BotaoAction from "../../../../../Componentes/BotaoAction";
import StatusSelect from "../../../../../Componentes/Select";
import { validarFormularioCadastrarProduto } from "../../../../../Utils/validarCadastro";
import { jwtDecode } from "jwt-decode";
import { postProdutosPC, getProdutoPorId, putProdutoPC } from "../../../../../services/produtosServices";
import { getUserPorNome } from "../../../../../services/authServices";
import { useParams } from "react-router-dom";
import ModalAviso from "../../../../../Componentes/ModalAviso";
import useModalAviso from "../../../../../hooks/useModalAviso";

const STATUS_OPTIONS = [
  // Pré-projeto
  { value: "negociacao",        label: "Negociação" },
  { value: "orcamento_enviado", label: "Orçamento enviado" },
  { value: "aguardando_sinal",  label: "Aguardando sinal" },
  { value: "contrato_assinado", label: "Contrato assinado" },

  // Em execução
  { value: "planejamento",      label: "Planejamento" },
  { value: "criando_o_design",  label: "Criando o design" },
  { value: "desenvolvimento",   label: "Desenvolvimento" },
  { value: "testes",            label: "Testes" },
  { value: "revisao_cliente",   label: "Revisão do cliente" },
  { value: "ajustes",           label: "Ajustes / Correções" },

  // Entrega
  { value: "aguardando_deploy", label: "Aguardando deploy" },
  { value: "concluido",         label: "Concluído" },
  { value: "entregue",          label: "Entregue ao cliente" },

  // Pós-entrega
  { value: "manutencao",        label: "Manutenção" },
  { value: "garantia",          label: "Em garantia" },

  // Financeiro
  { value: "aguardando_pagamento", label: "Aguardando pagamento" },
  { value: "pago",              label: "Pago" },
  { value: "inadimplente",      label: "Inadimplente" },

  // Bloqueados / Encerrados
  { value: "pausado",           label: "Pausado" },
  { value: "cancelado",         label: "Cancelado" },
  { value: "arquivado",         label: "Arquivado" },
];

const STATUS_COR_MAP = {
  // Pré-projeto → tons de cinza/lilás
  negociacao:           "gray",
  orcamento_enviado:    "purple",
  aguardando_sinal:     "purple",
  contrato_assinado:    "teal",

  // Em execução → azul/índigo
  planejamento:         "blue",
  criando_o_design:     "purple",
  desenvolvimento:      "blue",
  testes:               "pink",
  revisao_cliente:      "orange",
  ajustes:              "orange",

  // Entrega → verde
  aguardando_deploy:    "yellow",
  concluido:            "green",
  entregue:             "green",

  // Pós-entrega → teal
  manutencao:           "teal",
  garantia:             "teal",

  // Financeiro → âmbar/vermelho
  aguardando_pagamento: "yellow",
  pago:                 "green",
  inadimplente:         "red",

  // Bloqueados / Encerrados
  pausado:              "orange",
  cancelado:            "red",
  arquivado:            "gray",
};

const FORM_VAZIO = {
    nomeProjeto: "",
    status: "",
    statusCor: "",
    cliente: "",
    clienteNome: "",
    dateEntrega: "",
    linkContrato: "",
    linkDemo: "",
    obser: "",
}

function AcaoCadastrarProdutoPc(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const { id } = useParams() // undefined na rota de cadastro, preenchido na de edição
    const modoEdicao = Boolean(id)

    const [erroParaCadastrarPC, setCadastrarErro] = useState("")
    const [userAdm, setUserAdm] = useState({})
    const [clientesBuscados, setClientesBuscados] = useState([]);
    const [carregando, setCarregando] = useState(false)
    const [form, setForm] = useState(FORM_VAZIO);

    // Pega dados do token
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        const decoded = jwtDecode(token);
        setUserAdm(decoded);
    }, []);

    // Se tiver id, busca o produto e preenche o form
    useEffect(() => {
        if (!modoEdicao) return;

        async function carregarProduto() {
            setCarregando(true)
            try {
                //chama api para pegar o produto
                const produto = await getProdutoPorId(id)

                // Formata a data para yyyy-MM-dd que o input type="date" exige
                const dataFormatada = produto.dateEntrega
                    ? new Date(produto.dateEntrega).toISOString().split("T")[0]
                    : ""
                
                setForm({
                    nomeProjeto: produto.nomeProjeto || "",
                    status: produto.status || "",
                    statusCor: produto.statusCor || "",
                    cliente: produto.cliente?._id || "",
                    clienteNome: produto.cliente?.nomeCompleto || "",
                    dateEntrega: dataFormatada,
                    linkContrato: produto.linkContrato || "",
                    linkDemo: produto.linkDemo || "",
                    obser: produto.obser || "",
                })
            } catch (error) {
                abrirAviso("Erro ao carregar produto para edição.")
            } finally {
                setCarregando(false)
            }
        }

        carregarProduto()
    }, [id])

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(STATUS_COR_MAP)
        setForm((prev) => ({
            ...prev,
            [name]: value,
            // Se mudou o status, atualiza a cor junto
            ...(name === "status" && { statusCor: STATUS_COR_MAP[value] || "gray" }),
        }));
    }
    
    //Envia o formulario para atualizar ou cadastrar um produto novo
    async function handleSubmit(e) {
        e.preventDefault();

        const erro = validarFormularioCadastrarProduto(form)
        if (erro) {
            setCadastrarErro(erro)
            return;
        }

        try {
            let resposta;
            if (modoEdicao) {
                console.log(form)
                // Chama PUT/PATCH para atualizar
                resposta = await putProdutoPC(id, form)
                abrirAviso("Produto atualizado")
            } else {
                // Chama POST para criar
                resposta = await postProdutosPC(form)
                setForm(FORM_VAZIO) // limpa só no cadastro
            }

            setCadastrarErro("")
            abrirAviso(resposta.message)
        } catch (error) {
            abrirAviso(error.message)
        }
    }

    async function buscarClientes(nome) {
        if (nome.length < 2) return;
        try {
            const data = await getUserPorNome(nome);
            setClientesBuscados(data);
        } catch (error) {
            abrirAviso(`Erro ao buscar cliente: ${error}`);
        }
    }

    if (carregando) return <p>Carregando...</p>

    return(
        <section className={CssAcaoProduto3.sectionCadastrarPC}>
            <div className={CssAcaoProduto3.divTitulo}>
                <h1>{modoEdicao ? "Editar Projeto" : `Bem vindo, ${userAdm.role}`}</h1>
                <p>
                    {modoEdicao
                        ? "Atualize as informações do projeto abaixo."
                        : "Nesta área você pode cadastrar novos sites ou produtos adquiridos pelos clientes..."}
                </p>
            </div>
            <form onSubmit={handleSubmit} className={CssAcaoProduto3.formCadastrarProdutoCliente}>
                <div className={CssAcaoProduto3.div1}>
                    <Input
                        label="Nome do Projeto" 
                        name="nomeProjeto" 
                        value={form.nomeProjeto} 
                        type="text"
                        onChange={handleChange}
                        placeholder="Nome do Projeto"
                        className={erroParaCadastrarPC ? "inputErro" : ""}
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
                                setForm(prev => ({ ...prev, clienteNome: valor, cliente: "" }));
                                buscarClientes(valor);
                            }}
                            placeholder="Digite o nome do cliente"
                            className={erroParaCadastrarPC ? "inputErro" : ""}
                        />
                        <ul className={CssAcaoProduto3.listaUl}>
                            {clientesBuscados.map(user => (
                                <div
                                    className={CssAcaoProduto3.listaDiv}
                                    key={user._id}
                                    onClick={() => {
                                        setForm(prev => ({ ...prev, cliente: user._id, clienteNome: user.nomeCompleto }));
                                        setClientesBuscados([]);
                                    }}
                                >
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
                        className={erroParaCadastrarPC ? "inputErro" : ""}
                    />
                </div>

                <Input label="Link do Contrato" name="linkContrato" type="text" value={form.linkContrato} onChange={handleChange} placeholder="Link do Contrato" />
                <Input label="Link da Demo" name="linkDemo" type="text" value={form.linkDemo} onChange={handleChange} placeholder="Link da Demo" />
                <TextArea label="Observações" name="obser" value={form.obser} onChange={handleChange} placeholder="Observações" />

                {erroParaCadastrarPC && <p className={CssAcaoProduto3.erro}>{erroParaCadastrarPC}</p>}

                {/* Botão muda de texto conforme o modo */}
                <BotaoAction child={modoEdicao ? "Atualizar" : "Salvar"} type="submit" />
            </form>

            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>
    )
}

export default AcaoCadastrarProdutoPc