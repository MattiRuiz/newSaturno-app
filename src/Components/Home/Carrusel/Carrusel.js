import React, { useState } from 'react'

const Carrusel = () => {
    const imagen1=  require("./carrusel1.jpg")
    
    const [img, setImg] = useState(imagen1);

    const cambioImagen = () => {
        if (img ===  imagen1)
        {
            setImg(require("./carrusel2.jpg"))
        }
        else {
            setImg(imagen1)
        }
    }

    return (
    <div>
        <div className='imagenCarrusel'>
            <img className="img" alt="imgCarrusel" src={img} />
            <button onClick={cambioImagen} type='button' className='buttonCarrusel'> ► </button>
        </div>
    </div>
  )
}

export default Carrusel;