import React from 'react'
import './about.css'
import ME from "../../Assests/me_about.png"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
      <div className="about_me">
        <div className="about_me_image">
          <img src={ME} alt="" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Coding</h5>
            <small>1200+ Hours of Coding</small>
          </article>
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>DSA</h5>
            <small>250+ DSA Problems</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>6+ projects</small>
          </article>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque similique, numquam magnam itaque distinctio aut corrupti accusantium ipsum, ut voluptates eius ad architecto laboriosam expedita incidunt animi! Qui, consequatur!</p>
        <a href="#contact" className='btn btn_primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About