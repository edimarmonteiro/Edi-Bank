

import { useState, useEffect } from 'react';
import { Layout } from "./components/Layout";
import './App.css'
import { api } from './components/Api/api';


//Pasando as tipagem da aoi
interface UserData{
  email: string
  senha: string
  nome: string
}


function App() {
  console.log(api)
  const [email, setEmail] = useState<string>('')
  //const [senha, setSenha] = useState<string>('')
  const [userData, setUserData] = useState<null | UserData>()

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
  })
  console.log(userData)
  //Altenticando usuario///////////////////
    const login = async (email: string): Promise<void> => {
      const data: any = await api

      if(email !== data.email) {
        return alert('Email inválido')
      }

      alert(`Bem vindo ${email}`)
    }
  //Altenticando usuario///////////////////
  return (
      <Layout >
        <div className='mae_div container mt-5'>
          <div className='row'>
            <div className=''>
          {
            //Renderização Condicional
            userData === null || userData === undefined ? 
            <h1>Loading...</h1> : <p>Informações carregadas</p>

          }
          <h3>Faça login</h3>
      
          
          <input placeholder='Email' id="emailInput" type='email' className='mt-3 ms-5'
          value={email} onChange={(e) => setEmail(e.target.value)} 
          />
        

        
          
          <input id="senhaInput" type='password' className='mt-2 ms-5'
          placeholder='Password'
          />
        

        
          <button className='mt-4 ms-5 ' onClick={() => login(email)}>
            Entrar
          </button>
        
        </div>
        </div>
        </div>
      </Layout>
    
    
  );
}

export default App;
//value={senha} onChange={(e) => setSenha(e.target.value)}




//col-alto justify-content-center mt-5