/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';

function Social() {
  return (
    <div className='header-social'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"> <FaGithub /> </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
        </a>
    </div>
  )
}

export default Social