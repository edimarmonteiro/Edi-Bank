import './CardInfo.css'

interface ICardInfo{
    moinContent: string
    content: string
}

const CardInfo = ({moinContent, content} : ICardInfo) => {
    return(
        <div className="colo text-dark">

            <div>
                {moinContent}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default CardInfo