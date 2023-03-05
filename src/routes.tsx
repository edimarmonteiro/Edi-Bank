/*Para trabalhar com as rotas principais
de forma mais segura e proficinal */

import { useContext } from "react"
import { AppContext } from "./components/AppContext"
import { Heand } from './components/Header/Heand';
import Conta from './components/pages/Conta';
import ContaInfo from './components/pages/ContaInfo';
import { Route, Routes } from 'react-router-dom';
const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    /*element={ isLoggedIn ? <Conta/> : <Heand/>}
    Fazendo a validação(Segurançã), só ira aparecer a opição
    de conta SE o "isLoggedIn" exirti (usuário estiver logado) 
    SE NÃO aparecera so o inicio/romr*/
    return (
        <Routes>
            <Route path='/' element={<Heand/>} />
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta/> : <Heand/>}/>
            <Route path='/informação' element={<ContaInfo/>} />
        </Routes>
    )
}

export default MainRoutes