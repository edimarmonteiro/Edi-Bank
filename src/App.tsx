import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Heand } from './components/Header/Heand';
import Conta from './components/pages/Conta';
import ContaInfo from './components/pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';


function App() {
 
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Heand/>} />
            <Route path='/conta/:id' element={<Conta/>}/>
            <Route path='/informação' element={<ContaInfo/>} />
          </Routes>
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
//value={senha} onChange={(e) => setSenha(e.target.value)}
//col-alto justify-content-center mt-5