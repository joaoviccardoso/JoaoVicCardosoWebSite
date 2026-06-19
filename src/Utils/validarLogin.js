import { validarEmail, validarSenha, validarSenhaLogin } from "./validacoes";

export function validarFormularioLogin(form) {
    if (!validarEmail(form.email)) {
        return "E-mail inválido";
    }

    const erroSenha = validarSenhaLogin(form.senha);
    if (erroSenha) {
        return erroSenha;
    }

    return null;
}

export function validarEmailMudarSenha(email){
    if (!validarEmail(email.email)) {
        return "E-mail inválido";
    }else{
        return null
    }
}

export function validarSenhaForte(form){
    const erroSenha = validarSenha(form.senha); // regra forte aqui sim
    if (erroSenha) {
        return erroSenha;
    }

    return null;
}