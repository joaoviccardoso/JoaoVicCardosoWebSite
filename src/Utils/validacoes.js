export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarSenha(senha) {
  return senha.length >= 3;
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