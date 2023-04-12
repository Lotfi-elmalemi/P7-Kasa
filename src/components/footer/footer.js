import React from 'react'
import './footer.css'
import logoFooter from '../../assets/logoFooter.svg'


export default function Footer() {
  return (
    <div className='footer-container'>
        <img src={logoFooter} alt="logo monochrome"/>
      <div className='FooterText'>
        <p><span>&copy;</span>2020 Kasa.All rights reserved</p>
      </div>
    </div>

  )
}
