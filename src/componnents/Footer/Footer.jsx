/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramLine } from 'react-icons/ri';
import { TbBrandTwitter } from 'react-icons/tb';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Sohel</a>
      <ul className="permalinks">
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#textimonials" >Textimonials</a></li>
        <li><a href="#contact" >Contact</a></li>

      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com"><MdFacebook/></a>
        <a href="https://instagram.com"><RiInstagramLine/></a>
        <a href="https://twitter.com"><TbBrandTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Tatka. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer