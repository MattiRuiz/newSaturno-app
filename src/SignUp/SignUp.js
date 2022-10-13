import React from 'react'
import { Button, Container } from 'reactstrap'
import './SignUp.css'

const SignUp = () => {
  return (
    <Container className="text-center py-5">
            <h2>Registrarse</h2>
            <form className='signUpForm'>
                <label>Nombre de usuario: </label>
                <input type="text"></input>
                <label>Nombre y apellido: </label>
                <input type="text"></input>
                <label>Email: </label>
                <input type="email"></input>
                <label>Número de celular: </label>
                <input type="number"></input>
                <label>Ubicación:</label>
                    <select>
                        <option value="Rosario">Rosario</option>
                        <option value="Arroyo Seco">Arroyo Seco</option>
                        <option value="VGG">Villa Gobernador Galvez</option>
                        <option value="Baigorria">Granadero Baigorria</option>
                    </select>
                <label>Contraseña: </label>
                <input type="password"></input>
                <label>Repita la contraseña: </label>
                <input type="text"></input>
            </form>
                <div className='buttonForm'>
                    <Button className='botonEnviar' color="primary">Enviar</Button>
                    <Button>Limpiar</Button>
                </div>
    </Container>
  )
}

export default SignUp