interface ICard{
    id: number
    paragafo: string
    detalhes: string
}

export const Carde = ({id, paragafo, detalhes}: ICard) => {
    return(
        <div>
            <h1>Carde {id}</h1>
            <p>{paragafo}</p>
            <p>{detalhes}</p>
        </div>
    )
}