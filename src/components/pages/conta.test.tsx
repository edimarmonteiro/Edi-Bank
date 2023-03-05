import { login } from "./Conta";

describe('login', () => {

    const mockEmail = 'edimarfilho971@gmail.com'

    //Se estiver logado True
    it('Deve exibir um alerta de boas-vinda caso o email der certo', async() => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    //Se não estiver logado False
    it('Deve exibir um erro caso o email seja invalido', async() => {
        const response = await login('edimarfilho971@gmail.com')
        expect(response).toBeFalsy()
    })
    })
