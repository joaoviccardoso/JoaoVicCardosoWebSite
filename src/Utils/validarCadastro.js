import { validarCpf, validarDataEntrega, validarEmail, validarLink, validarNome, validarSenha, validarTelefone } from "./validacoes";

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

export function validarFormularioAtualizarDados(form){
       // Só valida se o campo não estiver vazio
    if (form.nomeCompleto && !validarNome(form.nomeCompleto)) {
        return "O nome deve ter pelo menos 5 caracteres";
    }

    if (form.email && !validarEmail(form.email)) {
        return "E-mail inválido";
    }

    if (form.cpf && !validarCpf(form.cpf)) {
        return "CPF inválido";
    }

    if (form.telefone && !validarTelefone(form.telefone)) {
        return "O número não está no padrão do Brasil";
    }
}

export function validarFormularioCadastrarProduto(form){
    if (!form.nomeProjeto) {
        return "O nome do projeto é obrigatório";
    }

    if (!validarNome(form.nomeProjeto)) {
        return "O nome deve ter pelo menos 5 caracteres";
    } 

    if (!form.status) {
        return "O status do projeto é obrigatório";
    }

    if (!form.cliente) {
        return "Selecione um cliente da lista";  // garante que veio o _id
    }

    if (!form.dateEntrega) {
        return "A data de entrega é obrigatória";
    }

    if (!validarDataEntrega(form.dateEntrega)) {
        return "A data de entrega não pode ser no passado";
    }

     // Campos opcionais — só valida se preenchido
    if (form.linkContrato && !validarLink(form.linkContrato)) {
        return "O link do contrato é inválido";
    }

    if (form.linkDemo && !validarLink(form.linkDemo)) {
        return "O link da demo é inválido";
    }

    return null; // null = sem erros
}   

export function validarFormularioParaCadastrarMP(form){
    console.log(form)

    if (!form.nomeCompleto) {
        return "O nome do projeto é obrigatório";
    }

    if (!validarNome(form.descricaoCurta)) {
        return "A descricao deve ter pelo menos 5 caracteres";
    } 

    if (!validarNome(form.MotivodoProjeto)) {
        return "o motivo deve ter pelo menos 5 caracteres";
    } 

    for (let cont = 0; cont < form.funcionalidades.length; cont++){
        const funcionalidade = form.funcionalidades[cont];

        if (!funcionalidade.titulo || funcionalidade.titulo.trim() === "") {
            return `A funcionalidade ${cont + 1} precisa ter um título`;
        }

        if (!funcionalidade.descricao || funcionalidade.descricao.trim() === "") {
            return `A funcionalidade ${cont + 1} precisa ter uma descrição`;
        }

        if (funcionalidade.descricao.trim().length < 2) {
            return `A descrição da funcionalidade ${cont + 1} deve ter pelo menos 2 caracteres`;
        }
    }

    if(form.tecnologias.length <= 2){
        return "Adicione pelo menos 3 tecnologias";
    }

    if(form.funcionalidades.length < 1){
        return "Adicione pelo menos 1 funcionalidade";
    }

    if (form.linkProjetoOnline && !validarLink(form.linkProjetoOnline)) {
        return "O link do projeto online é inválido";
    }

    if (form.linkProjetoGitHub && !validarLink(form.linkProjetoGitHub)) {
        return "O link do github é inválido";
    }

    return null;
}