import { validarRoteiro } from '../validacoes/validarRoteiro'

export const controller_roteiro = () => ({
    createRoteiro: (roteiro, salvarRoteiro) => {
        if (!validarRoteiro(roteiro)) return ({ error: 'roteiro invalido' })
        return salvarRoteiro(roteiro)
    },
    updateRoteiro: (roteiro, editarRoteiro) => {
        if (!validarRoteiro(roteiro)) return ({ error: 'roteiro invalido' })
        return editarRoteiro(roteiro)
    },
    searchRoteiro: (id, searchRoteiro) => searchRoteiro(id),
})