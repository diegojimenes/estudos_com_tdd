import verificarNumeroDeTodosPendentes from './src/todos'
import fetch from 'node-fetch'

verificarNumeroDeTodosPendentes(fetch, 1)
    .then((res) => console.log(res))
