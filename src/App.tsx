import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStolage, getAllLocalStorage} from './services/storage';


  
function App() {
 

  //Verificar o retorno, se é true ou false
   /*Dessa forma ele só ira armazena o email(login) uma
    unica vez, mesmo saindo da pagina continuara salvo */
  !getAllLocalStorage() && createLocalStolage();
    //Sera chamado se o retorno for null ou endefaine
    
  
  
  

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <MainRoutes/>
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
//value={senha} onChange={(e) => setSenha(e.target.value)}
//col-alto justify-content-center mt-5