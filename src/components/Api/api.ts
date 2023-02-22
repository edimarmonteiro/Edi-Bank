//import { resolve } from "path"

const apiLogin = {
    email: 'edimarfilho971@gmail.com',
    senha: '#EDIMARpires17',
    nome: 'Edimar'
}

//Promise
export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(apiLogin)
    }, 3000)
})