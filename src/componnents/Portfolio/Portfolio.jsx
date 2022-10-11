import React from 'react';
import Img1 from '../../Assets/images/portfolio1.jpg';
import Img2 from '../../Assets/images/portfolio2.jpg';
import Img3 from '../../Assets/images/portfolio3.jpg';
import Img4 from '../../Assets/images/portfolio4.jpg';
import Img5 from '../../Assets/images/portfolio5.png';
import Img6 from '../../Assets/images/portfolio6.jpg';

import './Portfolio.css';
export const Portfolio = () => {
  return (
    <section id='portfolio'>
<h5  id='portfolio-h5'>My Recent Work</h5>
<h2>Portfolio</h2>
<div className="contaoner portfolio-container">
  <article className="portfolio-item">
    <div className="portfolio-item-image">
      <img src={Img1} alt="" />
      <h3>This is a portfolio item title</h3>
      <div className="portfolio-item-cta">
      <a href="https://github.com" className='btn'target="__blank" >Github</a>
      <a href="https://github.com"className='btn btn-primary' target="__blank">Live Demo</a>
      </div>
     
      
    </div>
  </article>
  <article className="portfolio-item">
    <div className="portfolio-item-image">
      <img src={Img2} alt="" />
      <h3>This is a portfolio item title</h3>
      <div className="portfolio-item-cta">
      <a href="https://github.com" className='btn'target="__blank" >Github</a>
      <a href="https://github.com"className='btn btn-primary' target="__blank">Live Demo</a>
      </div>
   
      
    </div>
  </article>
  <article className="portfolio-item">
    <div className="portfolio-item-image">
      <img src={Img3} alt="" />
      <h3>This is a portfolio item title</h3>
      <div className="portfolio-item-cta">
      <a href="https://github.com" className='btn'target="__blank" >Github</a>
      <a href="https://github.com"className='btn btn-primary' target="__blank">Live Demo</a>
      </div>
      
      
    </div>
  </article>
  <article className="portfolio-item">
    <div className="portfolio-item-image">
      <img src={Img4} alt="" />
      <h3>This is a portfolio item title</h3>
      <div className="portfolio-item-cta">
      <a href="https://github.com" className='btn'target="__blank" >Github</a>
      <a href="https://github.com"className='btn btn-primary' target="__blank">Live Demo</a>
      </div>
      
      
    </div>
  </article>
  <article className="portfolio-item">
    <div className="portfolio-item-image">
      <img src={Img5} alt="" />
      <h3>This is a portfolio item title</h3>
      <div className="portfolio-item-cta">
      <a href="https://github.com" className='btn'target="__blank" >Github</a>
      <a href="https://github.com"className='btn btn-primary' target="__blank">Live Demo</a>
      </div>
     
      
    </div>
  </article>
  <article className="portfolio-item">
    <div className="portfolio-item-image">
      <img src={Img6} alt="" />
      <h3>This is a portfolio item title</h3>
      <div className="portfolio-item-cta">
      <a href="https://github.com" className='btn'target="__blank" >Github</a>
      <a href="https://github.com"className='btn btn-primary' target="__blank">Live Demo</a>
      </div>
     
      
    </div>
  </article>
</div>

    </section>
  )
}
