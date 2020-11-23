import { controller_roteiro } from '../src/controllers/controller_roteiro'
import { model_roteiro } from '../src/models/fake/model_roteiro'

describe('cadastro de Roteiro', () => {
    it('criar roteiro', () => {
        let { createRoteiro } = controller_roteiro()
        let { create } = model_roteiro()
        let novoRoterio = {
            nome: 'x'
        }
        let roteiro = createRoteiro(novoRoterio, create)
        expect(roteiro.nome).toBe('x')
    })
})
