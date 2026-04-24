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