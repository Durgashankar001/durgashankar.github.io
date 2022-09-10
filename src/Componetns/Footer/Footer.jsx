import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>DURGASHANKAR PAL</a>
      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testmonial">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_social">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGATOR. All copy rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer