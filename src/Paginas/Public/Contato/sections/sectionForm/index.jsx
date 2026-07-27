import CssForm from "./form.module.css"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import Input from "../../../../../Componentes/Inputs/Input";
import RadioGroup from "../../../../../Componentes/Inputs/RadioInput";
import TextArea from "../../../../../Componentes/Inputs/TextArea";
import BotaoAction from "../../../../../Componentes/Buttons/BotaoAction";
import useModalAviso from "../../../../../hooks/useModalAviso";
import ModalAviso from "../../../../../Componentes/Modals/ModalAviso";

function Formulario(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
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

        const now = new Date();

        const templateParams = {
            ...form,
            time: now.toLocaleString()
        };

        emailjs.send(
            "service_y0wu13j",
            "template_sairp58",
            templateParams,
            "eQ_vECtnVco89DMqy"
        )
        .then(() => {
            setForm({
                nome: "",
                email: "",
                telefone: "",
                mensagem: "",
                assunto: ""
            })
            abrirAviso("Mensagem enviada com sucesso!");
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return(
        <form 
            className={CssForm.formulario}
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Novo contato do site!" />
            <input type="hidden" name="_next" value="https://www.jvcode.tech/" />
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
            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </form>
    )
}

export default Formulario