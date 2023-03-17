import './Heand.css'
import { MouseEventHandler, useContext } from 'react'
import { AppContext } from '../AppContext'
import { useState } from 'react';
import { login } from '../pages/Conta';
import { useNavigate } from 'react-router-dom';
import Edi from './Edi';
import { changeLocalStorage } from '../../services/storage';

export const Heand = () => {
    ///////INTERFACE INICIO     
    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validataUser = async (email: string) => {
      const loggedIn = await login(email)

      //!Se não estivar igal

      if(!loggedIn){
        return alert('Email invalido')
      }

      setIsLoggedIn(true)
      //FAzendo mudança de false para true ao fazer login
      changeLocalStorage({login: true})
      navigate('/conta/1')
    }

  //Voltando ao Home


    return(
        <>
        
         <Edi/>
          
        

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

          <button className='mt-4 ms-5 'onClick={() => validataUser(email)}>
            Entrar
          </button>
        </div>
        </div>
        </div>

    </>
    )
}