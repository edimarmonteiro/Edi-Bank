import { login } from "./Conta";

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedI: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any, 
    useNavigate: () =>  mockNavigate
}))

describe('login', () => {
    

const mockEmail = 'edimarfilho971@gmail.com'

it('Deve exibir um alerta de boas-vinda caso o email der certo', async() => {
    await login(mockEmail)
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
    expect(mockNavigate).toHaveBeenCalledWith('/1')
})

it('Não deve exibir a mensagem de boas vindas se o email', async () => {
    await login('edimarfilho971@gmail.com')
    expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
    expect(mockNavigate).not.toHaveBeenCalled()
})
})