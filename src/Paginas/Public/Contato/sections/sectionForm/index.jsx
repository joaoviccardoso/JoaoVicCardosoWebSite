import CssForm from "./form.module.css"
import { useState } from "react";
import Input from "../../../../../Componentes/Input";
import RadioGroup from "../../../../../Componentes/RadioInput";
import TextArea from "../../../../../Componentes/TextArea";
import BotaoAction from "../../../../../Componentes/BotaoAction";

function Formulario(){
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        assunto: ""
    });

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
        <form onSubmit={handleSubmit} className={CssForm.formulario}>
            <div className={CssForm.containerInputDeText}>
                <div className={CssForm.containerNomeEhTelefone}>
                    <Input
                        label="Nome"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        className={CssForm.inputNome}
                        placeholder="Nome"
                    />

                    <Input
                        label="Telefone"
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        className={CssForm.inputTelefone}
                        placeholder="Telefone"
                    />
                </div>
                
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={CssForm.inputEmail}
                    placeholder="Email"
                />
            </div>
            
            <div className={CssForm.containerInputRadio}>
                <RadioGroup
                    label="Qual Produto Voce Precisa?"
                    name="assunto"
                    value={form.assunto}
                    onChange={handleChange}
                    options={[
                        { label: "Landing Pages e Sites Profissionais", value: "LandingPagesEhSitesProfissionais" },
                        { label: "E-commerce (Loja Virtual)", value: "ECommerce" },
                        { label: "Manutenção e Melhorias", value: "ManutencaoEhMelhorias" },
                        { label: "Sistemas Web Personalizados", value: "SistemasWeb" },
                        { label: "Integração com APIs e Ferramentas", value: "IntegracaoComAPIsEhFerramentas" },
                        { label: "Design UI/UX", value: "Design" },
                        { label: "Consultoria e Ajustes Extras", value: "ConsultoriaEhAjustesExtras" }
                    ]}
                />
            </div>

            <div className={CssForm.containerInputTextArea}>
                <TextArea
                    label="Mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                />
            </div>

            <div className={CssForm.containerBotao}>
                <BotaoAction
                    child="Enviar"
                    id="btnEnviarFormulario"
                    type="submit"
                />
            </div>
        </form>
    )
}

export default Formulario