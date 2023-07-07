import React, {useState} from 'react'
import './Inicio.css'
export const Inicio = () => {
  const [currentImage, setCurrentImage] = useState('./Portatil.png');
  const [isBackImage, setIsBackImage] = useState(true);

  const handleNext = () => {
    setIsBackImage(true);
    setCurrentImage('./Portatil.png');
  }
  const handleBack = () => {
    setIsBackImage(false);
    setCurrentImage('./Portatil-abierto.png');
  };
  return (
    <div className='contenedor-portatil'>
      <div>
        <button onClick={handleBack} disabled={!isBackImage}>Abrir</button>
        <button onClick={handleNext} disabled={isBackImage}>Cerrar</button>
          <img className='imagen-portatil' src={currentImage} alt='Portatil'/>
      </div> 
    </div>
  )
}
