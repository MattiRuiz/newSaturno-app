import React from "react";
import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    

    const handleTheme = () => {
      
    }
                
      return (
        <LoginContext.Provider value={data} >{children}</LoginContext.Provider>
        );
    };
    
    export { ThemeProvider };
    export default ThemeContext;