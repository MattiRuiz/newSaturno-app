import React, { useState } from 'react';
import { Button } from "reactstrap";
import './Contact.css'

const Contact = () => {
    const [nameContact, setNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [subjectContact, setSubjectContact] = useState('');
    const [message, setMessage] = useState('');

    const nameContactHandler = (e) => {
        setNameContact(e.target.value)
    }

    const emailContactHandler = (e) => {
        setEmailContact(e.target.value)
    }

    const subjectContactHandler = (e) => {
        setSubjectContact(e.target.value)
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const limpiarCampos = () => {
        setNameContact('');
        setEmailContact('');
        setSubjectContact('');
        setMessage('');
    }

    return (
    <div className='contactPage'>
        <h2>Contacto</h2>
        <p><b>¿Tienes una consulta?</b> No dudes en escribirnos.</p>
        <form className='contactForm'>
            <label>Nombre: </label>
            <input onChange={nameContactHandler} value={nameContact} type="text"></input>
            <label>Email: </label>
            <input onChange={emailContactHandler} value={emailContact} type="email"></input>
            <label>Asunto: </label>
            <input onChange={subjectContactHandler} value={subjectContact} type="text"></input>
            <label>Mensaje: </label>
            <textarea onChange={messageHandler} value={message}></textarea>
       </form>
       <div className='buttonContact'>
            <Button color="primary">Enviar</Button> 
            <Button onClick={limpiarCampos}>Limpiar</Button> 
       </div>
    </div>
  )
}

export default Contact