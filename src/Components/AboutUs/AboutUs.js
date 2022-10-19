import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='aboutUsDiv'>
      <h2>Sobre nosotros</h2>
      <div className='div1'>
          <h5>Quienes somos:</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img
          className="contactImg"
          alt="motivation"
          src={require("./saturnoApp.png")}/>
      <div className='div2'>
        <h5>Misión, visión y objetivos:</h5>
        <p>Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec volutpat quis, eleifend at erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sollicitudin ante. Nunc feugiat id diam a auctor. Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec volutpat quis, eleifend at erat.</p>
      </div>
    </div>
  )
}

export default AboutUs