import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assests/me_img.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>DURGASHANKAR PAL</h1>
      <ul className="dynamic_text">
      <li><span>Developer</span></li>
      <li><span>Designer</span></li>
      <li><span>Freelancer</span></li>
      </ul>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="MY LOGO" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header