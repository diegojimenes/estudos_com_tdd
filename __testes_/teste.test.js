import verificarNumeroDeTodosPendentes from '../src/todos'

it('caminho feliz', () => {
    verificarNumeroDeTodosPendentes()
        .then((numeroDeTodosPendentes) => {
            expect(numeroDeTodosPendentes).toBe(1)
        })
})
