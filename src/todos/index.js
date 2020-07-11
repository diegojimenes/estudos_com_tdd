function verificarNumeroDeTodosPendentes(fetch) {
    return new Promise((res, rej) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.text())
            .then((body) => {
                let valor = JSON.parse(body)
                    .filter(({ userId, completed }) => (userId == 1) && !completed).length
                res(valor)
            })
    })
}

export default verificarNumeroDeTodosPendentes