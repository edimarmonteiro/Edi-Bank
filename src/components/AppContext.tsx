import { createContext, useState } from "react";


/////////////////ISSO É ESTADO GLOBAL/////////////////////////
//Valor do Context
interface IAppContext {
    user: string,
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
  }
    export const AppContext = createContext({} as IAppContext)
  
  //Provedor do valor do Context Global
    export const AppContextProvider = ({ children }: any) =>{
      const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
      const user = 'Edimar'
    
    return(
      <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }
  /*aGORA POSSO ACESSAR MEU USER (EDIMAR) EM QUALQUE LOGUAR */
  //////////////////FINAL ESTADO GLOBAL//////////////////////