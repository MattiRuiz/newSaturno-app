import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'
import './SignUp.css'

const baseUsuarios = [{
    userName: 'sofia12',
    nameLastname: 'sofia corva',
    email: 'sofia@gmail.com',
    phoneNumber: '123456',
    ubication: 'Rosario',
    password: '1234',
}]

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [nameLastname, setNameLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ubication, setUbication] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [userData ,setUserData] = useState(baseUsuarios); 


    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }
    
    const nameLastnameHandler = (e) => {
        setNameLastname(e.target.value)
    }
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    
    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }
    
    const ubicationHandler = (e) => {
        setUbication(e.target.value)
    }
    
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const validPasswordHandler = (e) => {
        setValidPassword(e.target.value)
    }

    const saveBaseUsuarioHandler = () => {
        
        const usuarioDatos = {
            userName: userName,
            nameLastname: nameLastname,
            email: email,
            phoneNumber: phoneNumber,
            ubication: ubication,
            password: password,
        }
        setUserData([usuarioDatos, ...baseUsuarios])
        window.localStorage.setItem('baseUsuario', JSON.stringify(userData))
        console.log(userData);   
    }

    const cleanInputs = () => {
        
        setUserName('');
        setNameLastname('');
        setEmail('');
        setPhoneNumber('');
        setUbication('');
        setPassword('');
        setValidPassword('');
    }
    
    return (
    
    <Container className="text-center py-5">
            <h2>Registrarse</h2>
            <form className='signUpForm'>
                <label>Nombre de usuario: </label>
                <input onChange={userNameHandler} value={userName} type="text"></input>
                <label>Nombre y apellido: </label>
                <input onChange={nameLastnameHandler} value={nameLastname} type="text"></input>
                <label>Email: </label>
                <input onChange={emailHandler} value={email} type="email"></input>
                <label>Número de celular: </label>
                <input onChange={phoneNumberHandler} value={phoneNumber} type="text"></input>
                <label>Ubicación:</label>
                    <select onChange={ubicationHandler} value={ubication}>
                        <option value="Rosario">Rosario</option>
                        <option value="Arroyo Seco">Arroyo Seco</option>
                        <option value="VGG">Villa Gobernador Galvez</option>
                        <option value="Baigorria">Granadero Baigorria</option>
                    </select>
                <label>Contraseña: </label>
                <input onChange={passwordHandler} value={password} type="password"></input>
                <label>Repita la contraseña: </label>
                <input onChange={validPasswordHandler} value={validPassword} type="password"></input>
            </form>
                <div className='buttonForm'>
                    <Button onClick={saveBaseUsuarioHandler} className='botonEnviar' color="primary">Enviar</Button>
                    <Button onClick={cleanInputs}>Limpiar</Button>
                </div>
    </Container>
  )
}

export default SignUp