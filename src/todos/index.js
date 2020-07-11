function verificarNumeroDeTodosPendentes(fetch, id) {
    return new Promise((res, rej) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.text())
            .then((body) => {
                let valor = JSON.parse(body)
                    .filter(({ userId, completed }) => (userId == id) && !completed).length
                res(valor)
            })
    })
}

export default verificarNumeroDeTodosPendentes