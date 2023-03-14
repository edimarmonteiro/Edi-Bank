import { changeLocalStorage, getAllLocalStorage } from "./storage"

const ediBank = {
    login: false
}

describe('storage', () => {
    //Global
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no lovalStorage com a nova chave', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('edibank');
    })

    it('Deve criar o obijeto no localStorage', () => {
        
        expect(mockSetItem).toHaveBeenCalledWith('edibank', JSON.stringify(ediBank) )
    })

    it('Deve alterar o valor do objeto localStorage', () => {
        changeLocalStorage(ediBank)
        expect(mockSetItem).toHaveBeenCalledWith('edibank', JSON.stringify(ediBank))
    })
})