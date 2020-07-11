import verificarNumeroDeTodosPendentes from '../src/todos'
import fetch from 'node-fetch'

verificarNumeroDeTodosPendentes(fetch)
    .then((res) => console.log(res))
