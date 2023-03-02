import { createContext } from "react";


/////////////////ISSO É ESTADO GLOBAL/////////////////////////
//Valor do Context
interface IAppContext {
    user: string,
    isLoggedIn: boolean
  }
    export const AppContext = createContext({} as IAppContext)
  
  //Provedor do valor do Context Global
    export const AppContextProvider = ({ children }: any) =>{
    const user = 'Edimar'
    const isLoggedIn = false
    return(
      <AppContext.Provider value={{user, isLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }
  /*aGORA POSSO ACESSAR MEU USER (EDIMAR) EM QUALQUE LOGUAR */
  //////////////////FINAL ESTADO GLOBAL//////////////////////