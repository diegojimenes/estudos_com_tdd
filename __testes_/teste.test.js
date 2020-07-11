import verificarNumeroDeTodosPendentes from '../src/todos'

it('caminho feliz', () => {
    const fetch = jest.fn(() => {
        return new Promise((res) => {
            let api = {
                text: () => new Promise((res) => {
                    let mockValue = JSON.stringify(
                        [{
                            "userId": 1,
                            "id": 2,
                            "title": "quis ut nam facilis et officia qui",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 3,
                            "title": "fugiat veniam minus",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 4,
                            "title": "et porro tempora",
                            "completed": true
                        }]
                    )
                    return res(mockValue)
                })
            }
            return res(api)
        })
    })
    return verificarNumeroDeTodosPendentes(fetch, 1)
        .then((numeroDeTodosPendentes) => {
            expect(numeroDeTodosPendentes).toBe(2)
        })
})
