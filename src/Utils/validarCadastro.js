import { validarEmail, validarNome, validarSenha, validarTelefone } from "./validacoes";

export function validarFormularioCadastro(form) {
    if (!validarNome(form.primeiroNome)) {
        return "O nome deve ter pelo menos 5 caracteres";
    } 

    if (!validarEmail(form.email)) {
        return "E-mail inválido";
    } 

    if (!validarSenha(form.senha)) {
        return "A senha deve ter pelo menos 3 caracteres"
    } 

    if (form.senha !== form.confirmarSenha) {
        return "Senhas não conferem";
    }

    if (!validarTelefone(form.telefone)) {
        return "O numero nao esta no padrao do brasil"
    } 

    return null
}