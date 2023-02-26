import { Link } from "react-router-dom";

const ContaInfo = () => {
    return(
        <div>
            <h1>Informaçãos da conta</h1>
            <Link to='/conta/1'>
                Minha conta
            </Link>
        </div>
    );
}

export default ContaInfo