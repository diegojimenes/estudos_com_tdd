export const validarRoteiro = (roteiro) => {
    const validacoes = {
        data: (data) => (typeof data) == 'string',
        horaInicio: (hora) => (typeof hora) == 'string',
        horaFim: (hora) => (typeof hora) == 'string',
        valor: (valor) => (typeof valor) == 'number',
        loja: (loja) => (typeof loja) == 'object',
        statusRoteiro: (statusRoteiro) => (typeof statusRoteiro.id) == 'number',
        idEmpresa: (idEmpresa) => (typeof idEmpresa) == 'string',
        fantasiaEmpresa: (fantasiaEmpresa) => (typeof fantasiaEmpresa) == 'string',
        tipo: (tipo) => (typeof tipo) == 'object',
        tempoEstimado: (tempoEstimado) => tempoEstimado.length > 0,
    }

    return Object.keys(roteiro).reduce((validador, chave) => {
        if(!validador) return false
        
        if(!validacoes[chave]) return true

        let validar = validacoes[chave](roteiro[chave])
        return validar
    }, true)
}