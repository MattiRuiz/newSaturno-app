import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FaRegMoon, FaSun } from "react-icons/fa";
import ThemeContext from '../../Contexts/ThemeContext/ThemeContext';

const ButtonTheme = () => {
    
    const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div>
        <Button onClick={handleTheme} name='theme' id='light' value='light'>
            <FaSun/>
        </Button>
        <Button onClick={handleTheme} name='theme' id='dark' value='dark'>
            <FaRegMoon/>
        </Button> 
    </div>
  )
}

export default ButtonTheme