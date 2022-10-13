import React, { useState } from 'react';
import { Button } from "reactstrap";
import { Container } from "react-bootstrap";
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = () => { 
       
        setUserName('');
        setPassword('');
    }
  
    return (
    <Container className="text-center py-5">
       <h1 className='h1Login'>Iniciar sesión</h1>
       <form className='inputLogin'>
            <label>Nombre de usuario: </label>
            <input onChange={userNameHandler} value={userName} type="text"></input>
            <label>Contraseña: </label>
            <input onChange={passwordHandler} value ={password}type="password"></input>
            <Button className='buttonLogin' onClick={loginHandler} color="primary">Entrar</Button> 
       </form>
       <div className='helpLogin'>
            <p>¿Olvidaste tu contraseña? Haz click <a href='#'>aquí.</a></p>
            <p>¿No tenes cuenta? Has click <Link to={"/signup"}>acá</Link> para registrarte.</p>
       </div>
    </Container>
  )
}

export default Login