import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5q1h19k', 'template_dciz76e', form.current, '5RoRq3Vq10tPXGDnp')
     e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='coi' />
            <h4>Email</h4>
            <h5>durgashankr14285@gmail.com</h5>
            <a href="mailto:durgashankarpal14285@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='coi' />
            <h4>Whatsapp</h4>
            <h5>{"+91"} 7894017882</h5>
            <a href="https://api.whatsapp.com/send?phone=7894017882" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='coi' />
            <h4>LinkedIn</h4>
            <h5>Durgashankar Pal</h5>
            <a href="mailto:durgashankarpal14285@gmail.com" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="messagee" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn_primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact