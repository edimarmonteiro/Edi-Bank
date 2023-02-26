//import { resolve } from "path"

const apiLogin = {
    email: 'edimarfilho971@gmail.com',
    senha: '#EDIMARpires17',
    nome: 'Edimar',
    balence: 2000.00,
    id: '1'
}

//Promise
export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(apiLogin)
    }, 3000)
})