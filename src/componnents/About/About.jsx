import React from 'react';
import { FiAward, FiUsers } from 'react-icons/fi';
import { VscNewFolder } from 'react-icons/vsc';
import image from '../../Assets/images/me-about.png';
import './About.css';

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
   <div className="about-me">
    <img src={image} alt="about-me" />
   </div>
   <div className="about-content">
    <div className="about-cards">
      <article className="about-card">
        <FiAward  className='about-icon'/>
       <h5>Experience</h5>
       <small>3+ Years Working</small>
      </article>
      <article className="about-card">
        <FiUsers className='about-icon'/>
       <h5>Clients</h5>
       <small>30+ WorldWide</small>
      </article>
      <article className="about-card">
        <VscNewFolder  className='about-icon'/>
       <h5>Projects</h5>
       <small>25+ Completed</small>
      </article>
    </div>
    <p>I am Sohel, the CEO of Tatka.io, a user-centric software development agency craving to help people in their business.</p>
    <a href="#contact" className='btn btn-primary'> Let's Talk </a>
   </div>
      </div>
    </section>
  )
}
