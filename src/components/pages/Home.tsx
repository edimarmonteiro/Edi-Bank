

import { useState, useEffect } from 'react';
//import { Layout } from '../Layout';
import './Home.css'



const Home = () => {

    
    const [email, setEmail] = useState<string>('')
    //const [senha, setSenha] = useState<string>('')
    /*const [userData, setUserData] = useState<null | UserData>()
  
    
    //invocando API
    useEffect(() => {
      const getData = async () => {
        const data: any | UserData =  await api
        setUserData(data)
      }
  
      getData()
    })
    console.log(userData)*/
    //Altenticando usuario///////////////////
             /* const login = async (email: string): Promise<void> => {
                const data: any = await api
          
                if(email !== data.email) {
                  return alert('Email inválido')
                }
          
                alert(`Bem vindo ${email}`)
              }*/
    //Altenticando usuario///////////////////


    return(
       
        <div className='mae_div container mt-5'>
          <div className='row'>
            <div className=''>
          {/*
            //Renderização Condicional
            userData === null || userData === undefined ? 
            <h1>Loading...</h1> : <p>Informações carregadas</p>

  */}
          <h3>Faça login</h3>
      
          
          <input placeholder='Email' id="emailInput" type='email' className='mt-3 ms-5'
          value={email} onChange={(e) => setEmail(e.target.value)} 
          />
        

        
          
          <input id="senhaInput" type='password' className='mt-2 ms-5'
          placeholder='Password'
          />
        

        
          <button className='mt-4 ms-5 ' /*onClick={() => login(email)}*/>
            Entrar
          </button>
        
        </div>
        </div>
        </div>
      
    
    )
}

export default Home