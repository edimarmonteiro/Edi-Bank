import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/pages/Home';
import Conta from './components/pages/Conta';
import ContaInfo from './components/pages/ContaInfo';

function App() {
 
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/conta/:id' element={<Conta/>}/>
          <Route path='/informação' element={<ContaInfo/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
//value={senha} onChange={(e) => setSenha(e.target.value)}
//col-alto justify-content-center mt-5