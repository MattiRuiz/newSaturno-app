import React from "react";
import { createContext, useState } from "react";
import { authClient } from "../../functions/clientMethods";

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [auth, setAuth] = useState(null);
    
    const handleLogin = () => {
      
    }
        
    const data = {auth, handleLogin};
      return (
        <LoginContext.Provider value={data} >{children}</LoginContext.Provider>
        );
    };
    
    export { LoginProvider };
    export default LoginContext;