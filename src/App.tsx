import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { changeLocalStorage, createLocalStolage, getAllLocalStorage } from './services/storage';


  
function App() {
 
  createLocalStolage();
  
  console.log(getAllLocalStorage())

  changeLocalStorage({
    login: true
  })
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