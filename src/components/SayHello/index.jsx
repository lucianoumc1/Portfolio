import React from 'react'
import contactImage from '../../assets/images/cover-image.jpg'
// import SocialMediaList from './SocialMediaList'
import './SayHello.scss'

export default function SayHello() {
  return (
    <section id='contact-section' className='say-hello__container'>
      <div className='say-hello__content'>
        <div className='say-hello__description'>
          <h2>Say hi.</h2>
          <h4 className='say-hello__email'>lucianoumc1@gmail.com</h4>
          <span className='break-line'></span>
          <p>I love to design and make things. I speak, teach, and consult at tech companies and startups, e.g. Spotify, Minecraft, GitHub, and Hyper Island. Say hi!</p>
          <p className='author--name'>Luciano Madroñal Correa</p>
          <p className='author--from'>Buenos Aires, Argentina</p>
          {/* <SocialMediaList/> */}
        </div>
        <div className='say-hello__image--container'>
          <img className='say-hello__image--item' src={contactImage} loading='lazy' alt="" />
        </div>
      </div>
    </section>
  )
}
