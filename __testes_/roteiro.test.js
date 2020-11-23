import { controller_roteiro } from '../src/controllers/controller_roteiro'
import { model_roteiro } from '../src/models/fake/model_roteiro'

describe('cadastro de Roteiro', () => {
    it('criar roteiro', () => {
        let { createRoteiro } = controller_roteiro()
        let { create } = model_roteiro()
        let novoRoterio = {
            nome: 'x',
        }
        let roteiro = createRoteiro(novoRoterio, create)
        expect(roteiro.nome).toBe('x')
    })
    
    it('criar roteiro invalido', () => {
        let { createRoteiro } = controller_roteiro()
        let { create } = model_roteiro()
        let novoRoterio = {
            nome: 'x',
            horaInicio: 464646456
        }
        expect(createRoteiro(novoRoterio, create)).toEqual({error: 'roteiro invalido'})
    })
})

describe('edição de Roteiro', () => {
    it('editar roteiro', () => {
        let { updateRoteiro } = controller_roteiro()
        let { update } = model_roteiro()
        let editarRoteiro = {
            nome: 'x',
        }
        let roteiro = updateRoteiro(editarRoteiro, update)
        expect(roteiro.nome).toBe('x')
    })
    
    it('editar roteiro inválido', () => {
        let { updateRoteiro } = controller_roteiro()
        let { update } = model_roteiro()
        let editarRoteiro = {
            nome: 'x',
            horaInicio: 464646456
        }
        expect(updateRoteiro(editarRoteiro, update)).toEqual({error: 'roteiro invalido'})
    })
})

describe('busca de Roteiro', () => {
    it('buscar roteiro', () => {
        let { searchRoteiro } = controller_roteiro()
        let { search } = model_roteiro()
    
        let roteiro = searchRoteiro('x', search)
        expect(roteiro[0].id).toBe('x')
    })
    
    it('id roteiro não encontrado', () => {
        let { searchRoteiro } = controller_roteiro()
        let { search } = model_roteiro()

        let roteiro = searchRoteiro('y', search)
        expect(roteiro.length).toEqual(0)
    })
})
