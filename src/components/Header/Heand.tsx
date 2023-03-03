import './Heand.css'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { useState } from 'react';

export const Heand = () => {
    ///////INTERFACE INICIO     
    const [email, setEmail] = useState<string>('')

    const context = useContext(AppContext)
    console.log(context)

    return(
        <>
        <h1 className="dono">Edi Bank</h1>
      

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

    </>
    )
}