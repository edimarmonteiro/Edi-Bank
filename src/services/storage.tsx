interface IEdiBank {
    login: boolean;
}

const ediBank = {
    login: false
}

//Estamos puchando a (edibank)
export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('edibank')
}

//Trasformando POO em etsring
//Estamos atribuindo valores a (edibank) que sera chamada acima
export const createLocalStolage = (): void => {
    localStorage.setItem('edibank', JSON.stringify(ediBank))
}

export const changeLocalStorage = (ediBank: IEdiBank) => {
    localStorage.setItem('edibank', JSON.stringify(ediBank))
}