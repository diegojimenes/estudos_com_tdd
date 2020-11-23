import { validarRoteiro } from '../src/testWithFIrebase'
import { model } from '../src/modelRoteiro'

let roteiro = model({
    uid: 'uid', 
    imagem: 'imagem',
    fantasia: 'fantasia'
})

roteiro = {
    ...roteiro,
    valor: 25,
    notaFiscal: { requerida: false },
    loja: {
        lojaFantasia: "x"
    },
    documento: null,
    statusNotificacaoVisita: null,
    statusRoteiro: { id: 1 },
    tipo: {
        descricao: 'reposicao',
        icone: 'dolly',
        id: 1
    },
    descricao: 'buuuuu',
    arquivado: false,
    tempoEstimado: 'uma hora',
    selecaoAutomatica: false,
    material: {
        fornecido: false,
        descricao: ''
    }
}

describe('Validações de roteiro', () => {
    it('validar roteiro', () => {
        let validacao = validarRoteiro(roteiro)
        expect(validacao).toBe(true)
    })
    it('validar roteiro com roteiro incorreto', () => {
        let roteiroErrado = {...roteiro}
        roteiroErrado.valor = '0000'
        let validacao = validarRoteiro(roteiroErrado)
        expect(validacao).toBe(false)
    })
})
