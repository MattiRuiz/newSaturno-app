import React from "react";
import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  const handleLogin = (user) => {
    if (user) {
      console.log(user, 'la puta q te pario')
      setAuth(user);
    }
  };
  console.log(auth, 'auth');

  const data = { auth, handleLogin };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginProvider };
export default LoginContext;
