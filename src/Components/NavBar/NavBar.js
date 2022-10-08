import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
       <Link to={'/'}> 
       <img className='logoApp' alt="logoApp" src={require("./logo.png")} />
       </Link>

       <ul className='navBar-options'> 
            <li><Link to={'/buscar'}>Buscar</Link></li>
            <li><Link to={'/profesionales'}>Profesionales</Link></li>
            <li><Link to={'/contacto'}>Contacto</Link></li>
            <li><Link to={'/sobrenosotros'}>Sobre nosotros</Link></li>
            <li className='buttonLogin'><Link to={'/login'}>Login</Link></li>
       </ul>
    </div>
  )
}

export default NavBar