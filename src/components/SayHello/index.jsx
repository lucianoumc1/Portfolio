import SocialMediaList from '../SocialMediaList'
import './SayHello.scss'

export default function SayHello() {
  return (
    <section id='contact-section' className='say-hello__container'>
      <div className='say-hello__content'>
        <div className='say-hello__description'>
          <h2>Say hi</h2>
          <h4 className='say-hello__email'>lucianoumc1@gmail.com</h4>
          <span className='break-line'></span>
          <p>Me fascina hacer y aprender cosas nuevas, y disfruto mucho programar, as&iacute; que te invito a que regreses pronto a mi web.
            Seguro habr&aacute; muchas cosas m&aacute;s para ver.
            Y si te gustaron mis proyectos, o queres saber m&aacute;s sobre m&iacute;,
            te invito a que conversemos, voy a estar encantado de responder tus mensajes.👇✉️</p>
          <p className='author--name'>Luciano Madro&ntilde;al Correa</p>
          <p className='author--from'>Buenos Aires, Argentina</p>
          <SocialMediaList/>
        </div>
        <div className='say-hello__image--container'>
        </div>
      </div>
    </section>
  )
}
