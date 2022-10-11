import emailjs from '@emailjs/browser';
import { default as React, useRef } from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import './Contact.css';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_t4njs2m', 'template_pryqjho', form.current, 'm2MRZlkUCYnGtE8Op')
    e.target.reset()
    
  };
  return (
    <section id='contact'><h5> Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>sohel19sagor@gmail.com</h5>
            <a href="mailto:sohel19sagor@gmail.com" target="--blank">Send a message</a>
          </article>
          <article className="contact-option">
          <RiMessengerLine className='contact-icon'/>
            <h4>Messenger</h4>
            <h5>Tatka.io</h5>
            <a href="facebook.com" target="--blank">Send a message</a>
          </article>
          <article className="contact-option">
            <ImWhatsapp className='contact-icon'/>
            <h4>What's App</h4>
            <h5>+880 1865 625788</h5>
            <a href="https://api/whatsapp.com/send?phone+8801865625788" target="--blank">Send a message</a>
          </article>
          </div>
          
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
       
      </div>
      </section>
  )
}
