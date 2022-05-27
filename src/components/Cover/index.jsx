import Buttton from '../Button'
import cv from '../../assets/cv.pdf'
import './Cover.scss'

export default function Cover() {
  
  const contactHandleClickContact = () => {
    document.location.href = '#contact-section';
  }
  const contactHandleClickCv = () => {
    document.location.href = cv ;
  }

  return (
    <div className='cover__section' id='home'>
      <div className='cover__content'>
        <div className='cover__tittle-principal'>
          <span	>👋</span>
          <h1> Hola, soy Luciano</h1>
        </div>
        <h2>Soy un desarrollador Front-End y aficionado de la tecnolog&iacute;a 🖥️</h2>
        <div className='cover-content__buttons'>
          <Buttton name='Contacto' handleClick={contactHandleClickContact} />
          <Buttton name='CV' handleClick={contactHandleClickCv} />
        </div>
      </div>
    </div>
  )
}
