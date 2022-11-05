import React from "react";
import { createContext, useState } from "react";

const LoginContext = createContext();
const initialLogin = null;

const LoginProvider = ({children}) => {
    const [auth, setAuth] = useState(initialLogin);

    const handleLogin = () => {
      if (auth) {
        setAuth(null)
      } else {
        setAuth(true)
      }
    }       
        const data = {auth, handleLogin}
    
      return (
        <LoginContext.Provider value={data} >{children}</LoginContext.Provider>
        );
    };
    
    export { LoginProvider };
    export default LoginContext;