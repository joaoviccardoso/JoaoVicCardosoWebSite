export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarSenhaLogin(senha) {
  if (!senha) {
    return "A senha é obrigatória.";
  }
  return null;
}

export function validarSenha(senha) {
  console.log(senha)
  if (!senha) {
    return "A senha é obrigatória.";
  }

  if (senha.length < 8) {
    return "A senha deve ter no mínimo 8 caracteres.";
  }

  if (!/[A-Z]/.test(senha)) {
    return "A senha deve conter pelo menos uma letra maiúscula.";
  }

  if (!/[0-9]/.test(senha)) {
    return "A senha deve conter pelo menos um número.";
  }

  if (!/[^A-Za-z0-9]/.test(senha)) {
    return "A senha deve conter pelo menos um caractere especial (ex: !@#$%).";
  }

  return null;
}

export function validarNome(nome) {
  return nome.trim().length >= 5;
}

export function validarTelefone(telefone) {
  const telefoneLimpo = telefone.replace(/\D/g, ""); // remove tudo que não for número

  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
}

export function validarCpf(cpf){
  if (!cpf) return false;

  // Remove tudo que não for número
  cpf = cpf.replace(/\D/g, "");

  // CPF precisa ter 11 dígitos
  if (cpf.length !== 11) return false;

  // Elimina CPFs inválidos conhecidos (todos números iguais)
  if (/^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  // Validação do primeiro dígito verificador
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpf[9])) return false;

  // Validação do segundo dígito verificador
  soma = 0;

  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpf[10])) return false;

  return true;
}

export function validarDataEntrega(data) {
    if (!data) return false;
    const dataEntrega = new Date(data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // ignora hora
    return dataEntrega >= hoje; // não pode ser data no passado
}

export function validarLink(link) {
    try {
        new URL(link); // forma nativa de validar URL
        return true;
    } catch {
        return false;
    }
}