import { useState } from "react";
import BotaoAction from "../../../../../Componentes/BotaoAction"
import CssAcaoProduto1 from "./cadastroProdutoMp.module.css"
import Input from "../../../../../Componentes/Input";
import TextArea from "../../../../../Componentes/TextArea";
import CheckboxGroup from "../../../../../Componentes/CheckBoxGroup";
import FuncionalidadesInput from "../../../../../Componentes/InputDinamicoFuncionalidade";
import ImagemPrincipalInput from "../../../../../Componentes/InputImagem";
import ModalAviso from "../../../../../Componentes/ModalAviso";
import useModalAviso from "../../../../../hooks/useModalAviso";
import { postProdutosMP } from "../../../../../services/produtoMp";

const FORM_VAZIO = {
    nomeCompleto: "",
    descricaoCurta: "",
    MotivodoProjeto: "",
    tecnologias: "",
    funcionalidades: [],
    imagemPrincipal: null,
}

function AcaoCadastroProdutoMp(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const [erroParaAtualizar, setErroParaAtulizar] = useState("")
    const modoEdicao = Boolean(false)
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

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nomeCompleto", form.nomeCompleto);
        formData.append("descricaoCurta", form.descricaoCurta);
        formData.append("motivoDoProjeto", form.MotivodoProjeto); // ← nome corrigido p/ bater com o schema
        formData.append("tecnologias", JSON.stringify(form.tecnologias));
        formData.append("funcionalidades", JSON.stringify(form.funcionalidades));

        if (form.imagemPrincipal) {
            formData.append("imagemPrincipal", form.imagemPrincipal);
        }

        try {
            let resposta;
            if (modoEdicao) {
                console.log(formData)
                // Chama PUT/PATCH para atualizar
            } else {
                console.log(form)
                // Chama POST para criar
                resposta = await postProdutosMP(formData)
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
                        className={`${erroParaAtualizar ? "inputErro" : ""}`}
                    />
                </div>

                <div className={CssAcaoProduto1.div2}>
                    <TextArea
                        label="Descrição Curta"
                        placeholder="Descrição Curta"
                        onChange={handleChange}
                        value={form.descricaoCurta}
                        name="descricaoCurta"
                    />

                    <TextArea
                        label="Motivo do Projeto"
                        placeholder="Motivo do Projeto"
                        onChange={handleChange}
                        value={form.MotivodoProjeto}
                        name="MotivodoProjeto"
                    />
                </div>

                <div className={CssAcaoProduto1.div3}>
                    <CheckboxGroup
                        label="Qual tecnologia foi utilizada?"
                        name="tecnologias"
                        values={form.tecnologias}
                        onChange={handleChange}
                        options={[
                            { label: "HTML & CSS", value: "HtmlCss" },
                            { label: "Bootstrap", value: "Bootstrap" },
                            { label: "JavaScript", value: "JavaScript" },
                            { label: "React", value: "React" },
                            { label: "Node.js", value: "NodeJs" },
                            { label: "GSAP (Animações)", value: "Gsap" },
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
                    {/*erroParaAtualizar && <p className={CssAcaoProduto1.erro}>{erroParaAtualizar}</p>*/}
                    <BotaoAction child="Salvar" type="submit" />
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