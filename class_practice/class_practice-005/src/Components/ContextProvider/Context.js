 import { createContext, useState} from "react";

 const AuthContext = createContext()

 export default AuthContext;

  export function CustomContextProvider({children}){

    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    const login = () =>{
      setIsLoggedIn(true)
    }
  
    const logout =()=>{
      setIsLoggedIn(false)
    }

    return  ( 
         <AuthContext.Provider value={{isLoggedIn, login, logout}}>
          {children}
        </AuthContext.Provider>
        )
}