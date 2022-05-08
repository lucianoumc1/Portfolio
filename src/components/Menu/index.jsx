import React from 'react'
import './Navbar.scss'

export default function Menu() {
  return (
    <div className='navbar-menu__section'>
      <nav className='navbar-menu__container'>
        <ul>
          <li><a href="">Work</a></li>
          <li><a href="">Say Hello</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    </div>
  )
}
