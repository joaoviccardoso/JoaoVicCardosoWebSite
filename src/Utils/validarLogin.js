import { validarEmail, validarSenha } from "./validacoes";

export function validarFormularioLogin(form) {
    if (!validarEmail(form.email)) {
        return "E-mail inválido";
    } else if(!validarSenha(form.senha)){
        return "A senha deve ter pelo menos 3 caracteres";
    } else{
        return null
    }
}