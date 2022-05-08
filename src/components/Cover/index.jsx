import React from 'react'
import Buttton from '../Button'
import './Cover.scss'

export default function Cover() {
  return (
    <div className='cover__section'>
      <div className='cover__content'>
        <h1> Hi I´m Luciano.</h1>
        <h2>I´m a Front-End developer and designer from Argentina</h2>
        <div className='cover-content__buttons'>
          <Buttton name='Contact' />
          <Buttton name='Get CV' />
        </div>
      </div>
    </div>
  )
}