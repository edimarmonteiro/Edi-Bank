import { Spinner, Center } from '@chakra-ui/react'
import { api } from '../Api/api';
import { useState, useEffect, useContext  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardInfo from '../CardInfo';
import './Conta.css'
import { AppContext } from '../AppContext';
import Edi from '../Header/Edi';

//MECHEDO COM EMAIL altenticação
export const login = async (email: string): Promise<boolean> => {
    const data: any = await api

    if(email !== data.email) {
        return false
    }

    return true
}
//FIM 02/03/2022

interface UserData{
    email: string
    senha: string
    nome: string
    balence: number
    id: string
  }
  
const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    ////ESPORTANDO O CONTEXT GLOBAL
    const { isLoggedIn } = useContext(AppContext)
    console.log(isLoggedIn)

    !isLoggedIn && navigate('/')
        /*const login = () => {
          alert(`Bem-vindo(a) ${email}.`)
        }*/
      
        //invocando API
        useEffect(() => {
          const getData = async () => {
            const data: any | UserData =  await api
            setUserData(data)
            }
      
          getData()
        }, [])
        console.log(userData)

        const actualData = new Date()
        /*Pq o mês comessar ser contado do 0, para colocar o mês serto precisamos acresentar mais 1 */
        const currentMonth = actualData.getMonth() + 1;
        //Trabalhando com Parâmetros --- Destruturando
        

        if(userData && id !== userData.id) {
            navigate('/')
        }
    return(
        <>
        <Edi/>
        <div className='container'>
            <div className='row'>
            <div className=' prim col-4 offset-1 rounded  text-black bg-info-subtle mt-5 pt-2 fw-bold'>
                    {                        
                        userData === undefined || userData === null ?
                        /*Rendelição condicionel
                        Quando for NULL e não for, deve ser representado dentro dos parentes */
                        (
                            <Center>
                                <Spinner width='30px' height='30px' color='#3C6255'/>
                            </Center>
                        ):
                        (
                            <CardInfo moinContent={`Bem vindo ${userData?.nome}`} content={` ${actualData.getDate()}/${currentMonth}/${actualData.getFullYear()}:   ${actualData.getHours()};${actualData.getMinutes()}`} />                    
                        )

                    }
                </div>
                <div className='prim col-4 text-black bg-info-subtle rounded offset-1 mt-5 pt-2 fw-bold'>
                    {                           
                        userData === undefined || userData === null ?
                        /*Rendelição condicionel
                        Quando for NULL e não for deve ser representado dentro dos parentes */
                        (
                            <Center>
                                <Spinner width='30px' height='30px' color='#3C6255'/>
                            </Center>
                        ):
                        (
                            <CardInfo moinContent='Seu Saldo:' content={`R$ ${userData?.balence}`} />                
                        )

                    }
                </div>
            
            </div>
            
        </div>
        </>
    );
}

export default Conta
