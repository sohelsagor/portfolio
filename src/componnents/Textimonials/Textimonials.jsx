import React from 'react';
import Image from '../../Assets/images/avatar1.jpg';
import Image2 from '../../Assets/images/avatar2.jpg';
import Image3 from '../../Assets/images/avatar3.jpg';
import Image4 from '../../Assets/images/avatar4.jpg';

import './Textimonial.css';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Textimonials = () => {
  return (
    <section id="section">
      <h5>
        Review from Clients
      </h5>
      <h2>Textimonials</h2>
      <Swiper className="container textimonials-container"      modules={[Pagination,Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      
      
    
         >
        <SwiperSlide className="textimonal">
          <div className="client-avatar">
            <img src={Image} alt="" />
            
          </div>
          <h5 className="client-name">
              Sohel
            </h5>
            <small className="client-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati nisi illum consequuntur minus voluptatem culpa velit nulla reiciendis quibusdam laudantium, quo repellat nesciunt minima tempore asperiores odio nam saepe!
            </small>
        </SwiperSlide>
        <SwiperSlide className="textimonal">
          <div className="client-avatar">
            <img src={Image2} alt="" />
            
          </div>
          <h5 className="client-name">
              Sohel
            </h5>
            <small className="client-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati nisi illum consequuntur minus voluptatem culpa velit nulla reiciendis quibusdam laudantium, quo repellat nesciunt minima tempore asperiores odio nam saepe!
            </small>
        </SwiperSlide>
        <SwiperSlide className="textimonal">
          <div className="client-avatar">
            <img src={Image3} alt="" />
           
          </div>
          <h5 className="client-name">
              Sohel
            </h5>
            <small className="client-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati nisi illum consequuntur minus voluptatem culpa velit nulla reiciendis quibusdam laudantium, quo repellat nesciunt minima tempore asperiores odio nam saepe!
            </small>
        </SwiperSlide>
        <SwiperSlide className="textimonal">
          <div className="client-avatar">
            <img src={Image4} alt="" />
            
          </div>
          <h5 className="client-name">
              Sohel
            </h5>
            <small className="client-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati nisi illum consequuntur minus voluptatem culpa velit nulla reiciendis quibusdam laudantium, quo repellat nesciunt minima tempore asperiores odio nam saepe!
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
