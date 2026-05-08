
export function pegarUser(){
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        return user
    }
}

export function atualizarUserLocal(novosDados){
    const userAtual = pegarUser() || {}
    const userAtualizado = { ...userAtual, ...novosDados }
    localStorage.setItem('user', JSON.stringify(userAtualizado))
    return userAtualizado
}