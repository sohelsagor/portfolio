import React from 'react';
import ME from '../../Assets/images/_MG_1.png';
import Ctx from './Ctx';
import './Header.css';
import Social from './Social';
export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>
          Hello I'm
        </h5>
        <h2>
          Sohel Hossain
        </h2>
        <h5 className="text-light">
          FullStack Developer
        </h5>

        <Ctx />
        <Social />
        <div className="me">
          <img src={ME} alt="myPhoto" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}
