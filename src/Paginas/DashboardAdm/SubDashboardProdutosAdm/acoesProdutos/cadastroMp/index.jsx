import { useEffect, useState } from "react";
import BotaoAction from "../../../../../Componentes/BotaoAction"
import CssAcaoProduto1 from "./cadastroProdutoMp.module.css"
import Input from "../../../../../Componentes/Input";
import TextArea from "../../../../../Componentes/TextArea";
import CheckboxGroup from "../../../../../Componentes/CheckBoxGroup";
import FuncionalidadesInput from "../../../../../Componentes/InputDinamicoFuncionalidade";
import ImagemPrincipalInput from "../../../../../Componentes/InputImagem";
import ModalAviso from "../../../../../Componentes/ModalAviso";
import useModalAviso from "../../../../../hooks/useModalAviso";
import { getProdutoMpPorId, postProdutosMP, putProdutoMp } from "../../../../../services/produtoMp";
import { validarFormularioParaCadastrarMP } from "../../../../../Utils/validarCadastro";
import { useParams } from "react-router-dom";

const FORM_VAZIO = {
    nomeCompleto: "",
    descricaoCurta: "",
    MotivodoProjeto: "",
    tecnologias: "",
    funcionalidades: [],
    imagemPrincipal: null,
}

const API_BASE_URL = process.env.VITE_API_URL || "http://localhost:3000";

function AcaoCadastroProdutoMp(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const { id } = useParams()
    const [erroParaCadastrar, setErroParaCadastrar] = useState(null)
    const modoEdicao = Boolean(id)
    const [form, setForm] = useState(FORM_VAZIO);   

    function handleChange(e) {
        const { name, value } = e.target;
    
        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    }

    function handleFuncionalidadesChange(novaLista) {
        setForm((prev) => ({
            ...prev,
            funcionalidades: novaLista
        }));
    }

    function handleImagemChange(file) {
        setForm((prev) => ({ ...prev, imagemPrincipal: file }));
    }

    useEffect(() => {
            if (!modoEdicao) return;
    
            async function carregarProduto() {
                
                try {
                    //chama api para pegar o produto
                    const produto = await getProdutoMpPorId(id)
                    
                    setForm({
                        nomeCompleto: produto.nomeCompleto || "",
                        descricaoCurta: produto.descricaoCurta || "",
                        MotivodoProjeto: produto.motivoDoProjeto || "",
                        tecnologias: produto.tecnologias || "",
                        funcionalidades: produto.funcionalidades || [],
                        imagemPrincipal: produto.imagemPrincipal
                            ? `${API_BASE_URL}${produto.imagemPrincipal}`
                            : null
                    })

                } catch (error) {
                    abrirAviso("Erro ao carregar produto para edição.")
                }
            }
    
            carregarProduto()
        }, [id])

    //envia o formulario para a api
    async function handleSubmit(e) {
        e.preventDefault();
        
        const erro = validarFormularioParaCadastrarMP(form)
        if (erro) {
            setErroParaCadastrar(erro)
            return;
        }

        const formData = new FormData();
        formData.append("nomeCompleto", form.nomeCompleto);
        formData.append("descricaoCurta", form.descricaoCurta);
        formData.append("motivoDoProjeto", form.MotivodoProjeto); // ← nome corrigido p/ bater com o schema
        formData.append("tecnologias", JSON.stringify(form.tecnologias));
        formData.append("funcionalidades", JSON.stringify(form.funcionalidades)); 

        if (form.imagemPrincipal instanceof File) {
            formData.append("imagemPrincipal", form.imagemPrincipal);
        }

        try {
            let resposta;
            if (modoEdicao) {
                // Chama PUT/PATCH para atualizar
                resposta = await putProdutoMp(id, formData)
                abrirAviso("Produto atualizado")
            } else {
                // Chama POST para criar
                resposta = await postProdutosMP(formData)
                setErroParaCadastrar(null)
                setForm(FORM_VAZIO) // limpa só no cadastro
            }
                abrirAviso(resposta.message)
        } catch (error) {
            abrirAviso(error.message)
        }
    }

    return(
        <section>
            <div className={CssAcaoProduto1.divTitulo}>
                <h1>{modoEdicao ? "Editar Projeto" : `Bem vindo, Admin`}</h1>
                <p>
                    {modoEdicao
                        ? "Atualize as informações do projeto abaixo."
                        : "Nesta área você pode cadastrar novos sites ou produtos adquiridos pelos clientes..."}
                </p>
            </div>
            <form onSubmit={handleSubmit} className={CssAcaoProduto1.formDadosCliete}>
                <div className={CssAcaoProduto1.div1}>
                    <Input
                        label="Nome" 
                        name="nomeCompleto" 
                        value={form.nomeCompleto} 
                        onChange={handleChange}
                        placeholder={"Nome completo"} 
                        className={`${erroParaCadastrar ? "inputErro" : ""}`}
                    />
                </div>

                <div className={CssAcaoProduto1.div2}>
                    <TextArea
                        label="Descrição Curta"
                        placeholder="Descrição Curta"
                        onChange={handleChange}
                        value={form.descricaoCurta}
                        name="descricaoCurta"
                        className={`${erroParaCadastrar ? "inputErro" : ""}`}
                    />

                    <TextArea
                        label="Motivo do Projeto"
                        placeholder="Motivo do Projeto"
                        onChange={handleChange}
                        value={form.MotivodoProjeto}
                        name="MotivodoProjeto"
                        className={`${erroParaCadastrar ? "inputErro" : ""}`}
                    />
                </div>

                <div className={CssAcaoProduto1.div3}>
                    <CheckboxGroup
                        label="Qual tecnologia foi utilizada?"
                        name="tecnologias"
                        values={form.tecnologias}
                        onChange={handleChange}
                        options={[
                            { label: "HTML", value: "html.svg" },
                            { label: "CSS", value: "css.svg" },
                            { label: "Bootstrap", value: "bootstrap.svg" },
                            { label: "Figma", value: "figma.svg" },
                            { label: "JavaScript", value: "js.svg" },
                            { label: "React", value: "react.svg" },
                            { label: "Node.js", value: "node.svg" },
                            { label: "GSAP (Animações)", value: "gsap.png" },
                        ]}
                    />
                </div>

                <div className={CssAcaoProduto1.div4}>
                    <ImagemPrincipalInput
                        label="Imagem Principal"
                        value={form.imagemPrincipal}
                        onChange={handleImagemChange}
                    />

                    <FuncionalidadesInput
                        label="Funcionalidades do Projeto"
                        value={form.funcionalidades}
                        onChange={handleFuncionalidadesChange}
                        max={10}
                    />
                </div>

                <div className={CssAcaoProduto1.div5}>
                    
                </div>
                
                <div>
                    {erroParaCadastrar && <p className={CssAcaoProduto1.erro}>{erroParaCadastrar}</p>}
                    <BotaoAction child={modoEdicao ? "Atualizar" : "Salvar"} type="submit" />
                </div>
            </form>
            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>
    )
}

export default AcaoCadastroProdutoMp